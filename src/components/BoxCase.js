import React from 'react'
import { Link } from 'react-router-dom';

const BoxCase = ({ data }) => {
    return (
        <section className="secao-box-case">
            <div className='box-case-content'>
                <div className="box-case-header">
                    Nossos Trabalhos
                </div>
                <div className="cases-container">
                    {data.map((slide) => {
                        return (
                            <div className="box-case">
                                <img src={slide.img} className="caseImg" alt="text" />
                                <div className='case-box-text'>
                                    <div className="caseClient">{slide.client}</div>
                                    <div className="caseTitle">{slide.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='btn-section'>
                    <div className="btn-cases">
                        <Link to='/cases'>Mais Trabalhos</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BoxCase

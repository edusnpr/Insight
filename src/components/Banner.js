import React from 'react'

const Banner = ({ data }) => {
    return (
        <section className='banner-section'>
            <div className='bg'>
                <div className='banner-content'>
                    <div className='banner-texts'>
                        <h1>{data.titulo}</h1>
                        <p>{data.paragrafo} </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner

import React from 'react'
const CaseContainer = ({ data }) => {
    return (
        <div className="casesContainer">
            {data.map((dado) => {
                return (
                    <div className="caseBox">
                        <div className="caseBoxImage">
                            <img src={dado.img} className="boxImg" alt="text" />
                        </div>
                        <div className="caseBoxText">
                            <div className="caseBoxClient">{dado.client}</div>
                            <div className="caseBoxTitle">{dado.title}</div>
                            <div className="caseBoxDesc">{dado.desc}</div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
export default CaseContainer
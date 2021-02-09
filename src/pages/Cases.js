import React from 'react'
import CaseContainer from '../components/CaseContainer'
import Footer from "../components/Footer"
import { CasesData } from "../dataCases"

const Cases = () => {
    return (
        <>
            <div className="bg-pageCase">
                <section className="pageCase-content">
                    <div className="pageCase-Title">
                        <h1>Nossos Trabalhos</h1>
                    </div>
                    <CaseContainer data={CasesData} />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Cases
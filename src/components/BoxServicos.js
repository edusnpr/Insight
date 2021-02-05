import React from 'react'
import { BiFingerprint, BiMobileAlt, BiPulse, BiAt, BiAtom } from 'react-icons/bi'
import styled from 'styled-components'

const Branding = styled(BiFingerprint)`
    color:white;
    font-size:5vw;
    @media (max-width: 798px){
        font-size:15vw
    }
`
const DigStrag = styled(BiMobileAlt)`
    color:white;
    font-size:5vw;
    @media (max-width: 798px){
        font-size:15vw
    }
`
const BrandExp = styled(BiAtom)`
    color:white;
    font-size:5vw;
    @media (max-width: 798px){
        font-size:15vw
    }
`
const SocMed = styled(BiAt)`
    color:white;
    font-size:5vw;
    @media (max-width: 798px){
        font-size:15vw
    }
`
const BrandPerf = styled(BiPulse)`
    color:white;
    font-size:5vw;
    @media (max-width: 798px){
        font-size:15vw
    }
`

const BoxServicos = () => {
    return (
        <section className="secao-servico">
            <div className="servicos-content">
                <div className="servicos-header">Nossos Serviços</div>
                <div className="servicos-box">
                    <div className="servico-item">
                        <div className="servico-icon"><Branding /></div>
                        <div className="servico-textbox">
                            <div className="servico-title">Branding</div>
                            <div className="servico-desc">lorem ispom loreat fuit perti floria efor</div>
                        </div>
                    </div>
                    <div className="servico-item">
                        <div className="servico-icon"><DigStrag /></div>
                        <div className="servico-textbox">
                            <div className="servico-title">Digital Strategy</div>
                            <div className="servico-desc">lorem ispom loreat fuit perti floria efor</div>
                        </div>
                    </div>
                    <div className="servico-item">
                        <div className="servico-icon"><BrandExp /></div>
                        <div className="servico-textbox">
                            <div className="servico-title">Brand Experience</div>
                            <div className="servico-desc">lorem ispom loreat fuit perti floria efor</div>
                        </div>
                    </div>
                    <div className="servico-item">
                        <div className="servico-icon"><SocMed /></div>
                        <div className="servico-textbox">
                            <div className="servico-title">Social Media</div>
                            <div className="servico-desc">lorem ispom loreat fuit perti floria efor</div>
                        </div>
                    </div>
                    <div className="servico-item">
                        <div className="servico-icon"><BrandPerf /></div>
                        <div className="servico-textbox">
                            <div className="servico-title">Brand Perfomance</div>
                            <div className="servico-desc">lorem ispom loreat fuit perti floria efor</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BoxServicos

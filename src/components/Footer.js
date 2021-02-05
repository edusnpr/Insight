import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

const IconFacebook = styled(FaFacebookSquare)`
    color:white;
    font-size:2vw;
    margin:10px;
    @media (max-width: 798px){
        font-size:5vw;
        margin:20px;
    }
`
const IconInstagem = styled(FaInstagram)`
    color:white;
    font-size:2vw;
    margin:10px;
    @media (max-width: 798px){
        font-size:5vw;
        margin:20px;
    }
`
const IconTwitter = styled(FaTwitterSquare)`
    color:white;
    font-size:2vw;
    margin:10px;
    @media (max-width: 798px){
        font-size:5vw;
        margin:20px;
    }
`
const IconLinkedin = styled(FaLinkedin)`
    color:white;
    font-size:2vw;
    margin:10px;
    @media (max-width: 798px){
        font-size:5vw;
        margin:20px;
    }
`
const Footer = () => {
    return (
        <section className="secao-footer">
            <div className='footer-content'>
                <div className="footer-header">Insight <br /> Comunicação</div>
                <div className="footer-location">
                    <h3>Localização</h3>
                    <p>Rua do Limoeiros, 86</p>
                    <p>São Paulo - SP</p>
                </div>
                <div className="footer-contato">
                    <h3>Contato</h3>
                    <p>Tel: 011-12345678</p>
                    <p>E-mail:contato@insight.com</p>
                </div>
                <div className="footer-social">
                    <IconFacebook />
                    <IconInstagem />
                    <IconTwitter />
                    <IconLinkedin/>
                </div>
            </div>

        </section>
    )
}

export default Footer

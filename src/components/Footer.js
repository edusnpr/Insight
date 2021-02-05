import React from 'react'

const Footer = () => {
    return (
        <section className="secao-footer">
            <div className='footer-content'>
                <div className="footer-header">Agencia <br /> Comunicação</div>
                <div className="footer-location">
                    <h3>Localização</h3>
                    <p>Rua do Limoeiros, 86 - Brazil</p>
                </div>
                <div className="footer-contato">
                    <h3>Contato</h3>
                    <p>Tel: 011-12345678</p>
                    <p>E-mail:contato@insight.com</p>
                </div>
                <div className="footer-social">
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
            </div>

        </section>
    )
}

export default Footer

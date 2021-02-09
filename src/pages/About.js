import Footer from '../components/Footer'
import BoxAbout from '../components/BoxAbout'
import imgAbout1 from '../img/bg.jpg'
import { MemberData } from '../dataAbout'
const About = () => {
    return (
        <>

            <section className='about-bg'>
                <div className='about-container'>
                    <div className='about-title'>
                        <h1>Sobre A Insight</h1>
                    </div>
                    <div className='about-squares'>
                        <div className='ab-sec-1'>
                            <div className='sq-text-1'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            {/* <div className='sq-img-1'>
                                <img src={imgAbout1} className="aboutImg" alt="image" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <BoxAbout data={MemberData} />
            <Footer />
        </>
    )
}

export default About
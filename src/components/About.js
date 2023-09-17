import React, { useEffect } from 'react'
import { ReactComponent as Asterisk } from '../images/undraw_asterisk.svg'
import { ReactComponent as Paralines } from '../images/paralellines.svg'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])

    return (
        <div className='about-section' id="about-section">
            <div className='about-image-section'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500">
                <Asterisk className='asterisk'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"></Asterisk>
                <Paralines className='paralines'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"></Paralines>
                <img src={require('../images/xuramoyo.png')} className='about-image'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                alt='about'></img>
            </div>
            <div className='about-text-section'>
                <div className='about-text'>
                    <div className='tech-title-container'>
                        <p data-aos="fade-zoom-in"
                            data-aos-easing="ease-in"
                            data-aos-delay="200"
                            data-aos-offset="0"><span className='blue'>About</span> me</p>
                        <h4 data-aos="fade-zoom-in"
                            data-aos-easing="ease-in"
                            data-aos-delay="300"
                            data-aos-offset="0">"A Full-Stack developer can <span className='blue'>quickly adopt</span> new technologies <span className='blue'>as much as you need.</span>"</h4>
                        <p
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in"
                            data-aos-delay="400"
                            data-aos-offset="0">I'm a junior full-stack developer with a specialization in both front-end and back-end technologies, honed through Meta's rigorous programs. My journey in coding is driven by an unbridled passion for learning and innovation. I thrive on mastering new technologies while savoring the beauty of nature during my free time. Let's build remarkable solutions together!</p>
                    </div>
                    <div className='tech-stack-container'>
                        <h4 data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">My tech <span className='blue'>stack</span></h4>
                        <div className='tech-stack'>
                            <div className='stack'>
                                <h3 data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="600"
                                    data-aos-offset="0">Front-End</h3>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="900"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/html.png')}
                                    alt='html'></img>
                                    <p className='small-p'>HTML5</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="950"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/css.png')}
                                    alt='css'></img>
                                    <p className='small-p'>CSS3</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1000"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/js.png')}
                                    alt='javascript'></img>
                                    <p className='small-p'>JavaScript</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1050"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/react.png')}
                                    alt='reactjs'></img>
                                    <p className='small-p'>ReactJs</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1100"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/sass.png')}
                                    alt='sass'></img>
                                    <p className='small-p'>SASS</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1150"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/bootstrap.png')}
                                    alt='bootstrap'></img>
                                    <p className='small-p'>Bootstrap</p>
                                </div>
                            </div>
                            <div className='stack'>
                                <h3 data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="700"
                                    data-aos-offset="0">Back-End</h3>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1200"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/django.png')}
                                    alt='django'></img>
                                    <p className='small-p'>Django</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1250"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/python.png')}
                                    alt='python'></img>
                                    <p className='small-p'>Python</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1300"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/sql.png')}
                                    alt='mysql'></img>
                                    <p className='small-p'>MySQL</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1350"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/node.png')}
                                    alt='node'></img>
                                    <p className='small-p'>Node</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1400"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/api.png')}
                                    alt='api'></img>
                                    <p className='small-p'>RESTful API's</p>
                                </div>
                            </div>
                            <div className='stack'>
                                <h3 data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="800"
                                    data-aos-offset="0">Other</h3>
                                <div className='stack-item' data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1450"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/git.png')}
                                    alt='git'></img>
                                    <p className='small-p'>Git & Github</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1500"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/sketch.png')}
                                    alt='sketch'></img>
                                    <p className='small-p'>Sketch</p>
                                </div>
                                <div className='stack-item'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1550"
                                    data-aos-offset="0">
                                    <img src={require('../images/stack/figma.png')}
                                    alt='figma'></img>
                                    <p className='small-p'>Figma</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

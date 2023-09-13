import React from 'react'
import { ReactComponent as Asterisk } from '../images/undraw_asterisk.svg'
import { ReactComponent as Paralines } from '../images/paralellines.svg'

const About = () => {
    return (
        <div className='about-section'>
            <div className='about-image-section'>
                <Asterisk className='asterisk'></Asterisk>
                <Paralines className='paralines'></Paralines>
                <img src={require('../images/xuramoyo.png')} className='about-image'></img>
            </div>
            <div className='about-text-section'>
                <div className='about-text'>
                    <div className='tech-title-container'>
                        <p><span className='blue'>About</span> me</p>
                        <h4>"A Full-Stack developer can <span className='blue'>quickly adopt</span> new technologies <span className='blue'>as much as you need.</span>"</h4>
                        <p>I'm a junior full-stack developer with a specialization in both front-end and back-end technologies, honed through Meta's rigorous programs. My journey in coding is driven by an unbridled passion for learning and innovation. I thrive on mastering new technologies while savoring the beauty of nature during my free time. Let's build remarkable solutions together!</p>
                    </div>
                    <div className='tech-stack-container'>
                        <h4>My tech <span className='blue'>stack</span></h4>
                        <div className='tech-stack'>
                            <div className='stack'>
                                <h3>Front-End</h3>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/html.png')}></img>
                                    <p className='small-p'>HTML5</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/css.png')}></img>
                                    <p className='small-p'>CSS3</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/js.png')}></img>
                                    <p className='small-p'>JavaScript</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/react.png')}></img>
                                    <p className='small-p'>ReactJs</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/sass.png')}></img>
                                    <p className='small-p'>SASS</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/bootstrap.png')}></img>
                                    <p className='small-p'>Bootstrap</p>
                                </div>
                            </div>
                            <div className='stack'>
                                <h3>Back-End</h3>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/django.png')}></img>
                                    <p className='small-p'>Django</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/python.png')}></img>
                                    <p className='small-p'>Python</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/sql.png')}></img>
                                    <p className='small-p'>MySQL</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/node.png')}></img>
                                    <p className='small-p'>Node</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/api.png')}></img>
                                    <p className='small-p'>RESTful API's</p>
                                </div>
                            </div>
                            <div className='stack'>
                                <h3>Other</h3>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/git.png')}></img>
                                    <p className='small-p'>Git & Github</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/sketch.png')}></img>
                                    <p className='small-p'>Sketch</p>
                                </div>
                                <div className='stack-item'>
                                    <img src={require('../images/stack/figma.png')}></img>
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

import React from 'react'
import { ReactComponent as Threelines } from '../images/undraw_asterisk.svg'

const About = () => {
    return (
        <div className='about-section'>
            <div className='about-image-section'>
                <img src={require('../images/xura1.png')} className='about-image'></img>
            </div>
            <div className='about-text-section'>
                <div className='about-text'>
                    <h3><span className='blue'>About</span> me</h3>
                    <h4>"A Full-Stack developer can <span className='blue'>quickly adopt</span> new technologies <span className='blue'>as much as you need.</span>"</h4>
                    <p>I'm a junior full-stack developer with a specialization in both front-end and back-end technologies, honed through Meta's rigorous programs. My journey in coding is driven by an unbridled passion for learning and innovation. I thrive on mastering new technologies while savoring the beauty of nature during my free time. Let's build remarkable solutions together!</p>
                    <h3>My tech stack</h3>
                    <div className='tech-stack'>
                        <div className='stack'>
                            <h3>Front-End</h3>
                            <div className='stack-item'>
                                <img src={require('../images/stack/html.png')}></img>
                                <p>HTML5</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/css.png')}></img>
                                <p>CSS3</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/js.png')}></img>
                                <p>JavaScript</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/react.png')}></img>
                                <p>ReactJs</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/sass.png')}></img>
                                <p>SASS</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/bootstrap.png')}></img>
                                <p>Bootstrap</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/tailwind.png')}></img>
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className='stack'>
                            <h3>Back-End</h3>
                            <div className='stack-item'>
                                <img src={require('../images/stack/django.png')}></img>
                                <p>Django</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/python.png')}></img>
                                <p>Python</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/sql.png')}></img>
                                <p>MySQL</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/node.png')}></img>
                                <p>Node</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/api.png')}></img>
                                <p>RESTful API's</p>
                            </div>
                        </div>
                        <div className='stack'>
                            <h3>Other</h3>
                            <div className='stack-item'>
                                <img src={require('../images/stack/git.png')}></img>
                                <p>Git & Github</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/sketch.png')}></img>
                                <p>Sketch</p>
                            </div>
                            <div className='stack-item'>
                                <img src={require('../images/stack/figma.png')}></img>
                                <p>Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

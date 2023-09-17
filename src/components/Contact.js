import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])

    return (
        <div className='contact-section'
            data-aos="fade-up"
            data-aos-duration="1000"
            id='contact-section'>
            <div className='contact-text'>
                <div className='contact-heading'>
                    <p>Contact <span className='blue'>me</span></p>
                    <h2>Got a Project? Let's Talk!</h2>
                </div>
                <div className='contact-email'>
                    <img src={require('../images/icons8-mail-48.png')} className='mail' alt='mail'></img>
                    <a href="mailto:luis.escobar01109@gmail.com">
                        <p>luis.escobar01109@gmail.com</p>
                    </a>
                </div>
                <div className='contact-footer'>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/luis-escobar-martinez-281953244/' target="_blank">
                            <img src={require('../images/icons8-linkedin-48.png')}></img>
                        </a>
                        <a href='https://www.instagram.com/xura.coding/' target="_blank">
                            <img src={require('../images/icons8-instagram-48.png')}></img>
                        </a>
                        <a href='https://github.com/Xuradel' target="_blank">
                            <img src={require('../images/gitsocial.png')}></img>
                        </a>
                    </div>
                    <div className='links'>
                        <p className='hi'>👋</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

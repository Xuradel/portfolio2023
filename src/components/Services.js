import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])
    return (
        <div className='services-section' id='services-section'>
            <div className='services-title'
                data-aos="fade-up"
                data-aos-duration="1000">
                <h2>Services I offer</h2>
            </div>
            <div className='services-grid'
                data-aos="fade-up"
                data-aos-duration="1000">
                <div className='service'>
                    <img src={require('../images/development.png')} className='service-icon' alt='serviceicon'></img>
                    <h3>Web Development</h3>
                    <p>Crafting captivating websites tailored to your brand, engaging users, and boosting your online success.</p>
                </div>
                <div className='service'>
                    <img src={require('../images/maintenance.png')} className='service-icon' alt='serviceicon'></img>
                    <h3>Web Maintenance</h3>
                    <p>Keep your website in peak condition with our vigilant maintenance and updates, ensuring a seamless user experience.</p>
                </div>
                <div className='service'>
                    <img src={require('../images/SEO.png')} className='service-icon' alt='serviceicon'></img>
                    <h3>SEO</h3>
                    <p>Drive traffic, enhance visibility, and dominate search engine rankings with our strategic SEO solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default Services

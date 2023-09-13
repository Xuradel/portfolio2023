import React from 'react'

const Services = () => {
    return (
        <div className='services-section'>
            <div className='services-title'>
                <h2>Services I offer</h2>
            </div>
            <div className='services-grid'>
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

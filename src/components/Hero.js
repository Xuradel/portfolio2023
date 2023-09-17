import React, { useEffect } from 'react'
import { ReactComponent as Twolines } from '../images/undraw_two-lines.svg'
import { ReactComponent as Code } from '../images/undraw_code.svg'
import { ReactComponent as Arrow } from '../images/undraw_fun-arrow.svg'
import { ReactComponent as Coffee } from '../images/undraw_coffee.svg'
import { ReactComponent as Bar } from '../images/undraw_bar-chart.svg'
import { ReactComponent as Threelines } from '../images/undraw_three-lines.svg'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';


const Hero = () => {

    useEffect(() => {
        AOS.init({ duration: 300 })
    }, [])
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }
    return (
        <header>
            <div className='hero-text'>
                <div className='text'>
                    <Coffee className='coffee' data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="700"
                        data-aos-offset="0"></Coffee>
                    <Bar className='barchart' data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="950"
                        data-aos-offset="0"></Bar>
                    <Threelines className='threelines' data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="950"
                        data-aos-offset="0"></Threelines>
                    <p data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="750"
                        data-aos-offset="0">Full-Stack <span className='blue'>Developer</span></p>
                    <div className='headings'>
                        <h1 data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="800"
                            data-aos-offset="0">I Build Custom</h1>
                        <h2 data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="850"
                            data-aos-offset="0">Website Solutions</h2>
                        <h1 data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="900"
                            data-aos-offset="0">That Help Your</h1>
                        <h2 data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="950"
                            data-aos-offset="0">Business Grow</h2>
                    </div>
                    <div className='buttons'>
                        <button className='button-1' data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="1000"
                            data-aos-offset="0">
                            <a href='#projects'
                             className='certificates'
                             onClick={handleClick("projects")}>
                                <b>My work</b>
                            </a>
                        </button>
                        <button className='button-1 button-2' data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="1000"
                            data-aos-offset="0">
                            <a href='https://www.credly.com/badges/abef56ae-96e7-4b29-afe9-161f002a2309'
                                target='_blank' className='certificates'>
                                <b>Certificates</b>
                            </a>
                        </button >
                    </div>
                </div>
            </div>
            <div className='hero-image' data-aos="zoom-out" data-aos-delay="800"
                data-aos-easing="ease-in-back" data-aos-duration="1000">
                <Twolines className='twolines'></Twolines>
                <Code className='code'></Code>
                <Arrow className='arrow'></Arrow>
                <img src={require('../images/fullstack.png')} className='fullstack' alt='fullstackbadge'></img>
                <div className="circle-container">
                    <img src={require('../images/xura0.png')} className='avatar' alt='avatar'></img>
                </div>
            </div>
        </header>
    )
}

export default Hero

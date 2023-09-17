import React from 'react'
import { ReactComponent as Twolines } from '../images/undraw_two-lines.svg'
import { ReactComponent as Code } from '../images/undraw_code.svg'
import { ReactComponent as Arrow } from '../images/undraw_fun-arrow.svg'
import { ReactComponent as Coffee } from '../images/undraw_coffee.svg'
import { ReactComponent as Bar } from '../images/undraw_bar-chart.svg'
import { ReactComponent as Threelines } from '../images/undraw_three-lines.svg'



const Hero = () => {
    return (
        <header>
            <div className='hero-text'>
                <div className='text'>
                    <Coffee className='coffee'></Coffee>
                    <Bar className='barchart'></Bar>
                    <Threelines className='threelines'></Threelines>
                    <p>Full-Stack <span className='blue'>Developer</span></p>
                    <div className='headings'>
                        <h1>I Build Custom</h1>
                        <h2>Website Solutions</h2>
                        <h1>That Help Your</h1>
                        <h2>Business Grow</h2>
                    </div>
                    <div className='buttons'>
                        <button className='button-1'>
                            <b>See my work</b>
                        </button>
                        <button className='button-1 button-2'>
                            <b>About me</b>
                        </button>
                    </div>
                </div>
            </div>
            <div className='hero-image'>
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

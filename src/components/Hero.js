import React from 'react'
import { ReactComponent as Background } from '../images/heroimagebackground.svg'
const Hero = () => {
    return (
        <main>
            <div className='hero-text'>
                <div className='text'>
                    <p>Full Stack Developer</p>
                    <div className='headings'>
                        <h1>I Build Custom</h1>
                        <h2>Website Solutions</h2>
                        <h1>That Help Your</h1>
                        <h2>Business Grow</h2>
                    </div>
                    <p>I help you increase conversion and performance in every possible way.</p>
                </div>
            </div>
            <div className='hero-image'>
                <img src={require('../images/heroimage.png')}></img>
            </div>
        </main>
    )
}

export default Hero

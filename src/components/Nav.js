import React from 'react'
import { useEffect } from 'react';
import './Nav.css'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

function script() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    const mobileMenu = () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    }

    const closeMenu = () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }
    hamburger.addEventListener("click", mobileMenu)
    navLink.forEach((l) => l.addEventListener("click", closeMenu))
}

function sticky() {
    // Hide Navbar on scroll down
    var didScroll = false;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = document.querySelector('nav').offsetHeight;

    window.addEventListener('scroll', function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = window.scrollY;

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            document.querySelector('nav').classList.remove('nav-down');
            document.querySelector('nav').classList.add('nav-up');
        } else {
            // Scroll Up
            if (st + window.innerHeight < document.body.offsetHeight) {
                document.querySelector('nav').classList.remove('nav-up');
                document.querySelector('nav').classList.add('nav-down');
            }
        }

        lastScrollTop = st;
    }
}

const Nav = () => {

    useEffect(() => {
        script()
    })

    useEffect(() => {
        sticky()
    })

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
        <div className='navbar-container'>
            <nav class="navbar" id='navbar'>
                <a href="/" class="nav-logo" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    data-aos-offset="0">
                    <img src={require('../images/dev.png')}></img>
                    <p>Luis Web Dev</p>
                </a>
                <ul class="nav-menu">
                    <li class="nav-item" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                        <a href="#about" class="nav-link"
                            onClick={handleClick("about")}
                        >About</a>
                    </li>
                    <li class="nav-item" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="400"
                        data-aos-offset="0">
                        <a href="#services" class="nav-link"
                        onClick={handleClick("services")}>Services</a>
                    </li>
                    <li class="nav-item" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="500"
                        data-aos-offset="0">
                        <a href="#projects" class="nav-link"
                        onClick={handleClick("projects")}>Projects</a>
                    </li>
                    <li class="nav-item" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="600"
                        data-aos-offset="0">
                        <a href="#contact" class="nav-link"
                        onClick={handleClick("contact")}>Contact</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </div>

    )
}

export default Nav

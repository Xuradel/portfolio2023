import React from 'react'
import { useEffect } from 'react';
import './Nav.css'

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

function sticky(){
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
    return (
        <header class="header">
            <nav class="navbar" id='navbar'>
                <a href="#" class="nav-logo">
                    <img src={require('../images/dev.png')}></img>
                    <p>Luis Web Dev</p>
                    </a>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>

        </header>
    )
}

export default Nav

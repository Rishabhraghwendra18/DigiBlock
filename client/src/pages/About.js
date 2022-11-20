import React from 'react';
import './About.css';
import Navbar from './Navbar';
import ABOUT from "../assets/About.png";

function About() {
    return (
        <div >
            <Navbar></Navbar>
            <div className='about__container'>
                <div className='about__image'>
                    <img src={ABOUT} alt="about"></img>
                </div>
                <div className='about'>
                    <h1>About</h1>
                </div>
            </div>
        </div>

    )
}

export default About
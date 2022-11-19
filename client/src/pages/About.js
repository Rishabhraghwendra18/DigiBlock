import React from 'react';
import './About.css';
import Navbar from './Navbar';

function About() {
    return (
        <div >
            <Navbar></Navbar>
            <div className='about__container'>
                <div className='about'>
                    <h1>About</h1>
                </div>
            </div>
        </div>

    )
}

export default About
import React from 'react'
import './Home.css';
import LOGIN from "../assets/Login.png";
import RECORD from "../assets/Record.png";
import STUDENT from "../assets/Student.png";


function Home() {
    return (
        <div className='home__conatiner'>
            <div className="options-div" style={{ backgroundColor: '#abfe2c', color: '#00501e' }}>
                <div className='home__login'>
                    <img src={LOGIN} alt="login"></img>
                </div>
                <h1 className='app__heading'>Student Login</h1>


                <button className='button' >LAUNCH APP</button>

            </div>
            <div className='options-div' style={{ backgroundColor: '#00501e', color: '#abfe2c' }}>
                <div className='home__login'>
                    <img src={RECORD} alt="record"></img>
                </div>
                <h1 className='app__heading'>Explore Student Record</h1>
                <button className='button' >LAUNCH APP</button>

            </div>
            <div className='options-div' style={{ backgroundColor: '#abfe2c', color: '#00501e' }}>
                <div className='home__login'>
                    <img src={STUDENT} alt="student"></img>
                </div>
                <h1 className='app__heading'>Mint Student Record</h1>
                <button className='button' >LAUNCH APP</button>
            </div>
        </div>
    )
}

export default Home
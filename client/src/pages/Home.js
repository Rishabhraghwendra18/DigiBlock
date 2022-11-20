import React from 'react'
import './Home.css';
import LOGIN from "../assets/Login.png";
import RECORD from "../assets/Record.png";
import STUDENT from "../assets/Student.png";


function Home() {
    return (
        <div className='home__conatiner'>
            <div className="options-div" style={{ backgroundColor: '#abfe2c', color: '#00501e' }}>
                <div >
                    <img className='home__login' src={LOGIN} alt="login"></img>
                </div>
                <h1 className='app__heading'>Student Login</h1>


                <a className='button' href='http://student.localhost:3000'>LAUNCH APP</a>

            </div>
            <div className='options-div' style={{ backgroundColor: '#00501e', color: '#abfe2c' }}>
                <div>
                    <img className='home__login' src={RECORD} alt="record"></img>
                </div>
                <h1 className='app__heading'>Explore Student Record</h1>
                <a className='button' href='http://student.localhost:3000' >LAUNCH APP</a>

            </div>
            <div className='options-div' style={{ backgroundColor: '#abfe2c', color: '#00501e' }}>
                <div >
                    <img className='home__login' src={STUDENT} alt="student"></img>
                </div>
                <h1 className='app__heading'>Mint Student Record</h1>
                <a className='button' href='http://mint.localhost:3000'>LAUNCH APP</a>
            </div>
        </div>
    )
}

export default Home
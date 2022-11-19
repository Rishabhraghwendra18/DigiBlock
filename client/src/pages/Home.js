import React from 'react'
import './Home.css';


function Home() {
    return (
        <div className='home__conatiner'>
            <div className="options-div" style={{ backgroundColor: '#abfe2c', color: '#00501e' }}>
                <h1 className='app__heading'>Student Login</h1>

                <button className='button' >LAUNCH APP</button>

            </div>
            <div className='options-div' style={{ backgroundColor: '#00501e', color: '#abfe2c' }}>
                <h1 className='app__heading'>Explore Student Record</h1>
                <button className='button' >LAUNCH APP</button>

            </div>
            <div className='options-div' style={{ backgroundColor: '#abfe2c', color: '#00501e' }}>
                <h1 className='app__heading'>Mint Student Record</h1>
                <button className='button' >LAUNCH APP</button>
            </div>
        </div>
    )
}

export default Home
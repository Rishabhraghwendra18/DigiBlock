import React from 'react';
import './Navbar.css';

function Navbar() {
    const onButtonClick = () => {
        // const domain = getSubdomain();
        // let subdomain;
        // if (domain === 'localhost') subdomain = 'app.' + domain + ':3000'
        // else {
        //     subdomain = 'app.' + domain + '.com'
        // }
        // window.open(subdomain, '_blank');
    }
    return (
        <div className='nav__container'>
            <div>
                <div className='nav__buttoncontainer'>
                    <button className='nav__button' onClick={onButtonClick} >LAUNCH APP</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
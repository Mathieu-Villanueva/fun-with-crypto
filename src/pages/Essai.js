import React from 'react';
import { Link } from 'react-router-dom';


const Essai = () => {
    return (
        <div className="page-essai">
            <div className="cube">
                <Link to='/crypto'>
                    <div className="face a">
                        <span>Crypto</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
                <Link to='/about'>
                    <div className='face b'>
                        <span>About</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
                <Link to='/contacts'>                  
                    <div className='face c'>
                        <span>Contact</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Essai;
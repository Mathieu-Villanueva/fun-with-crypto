import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Essai = () => {
    const [hidden,sethidden] = useState(false)
    const [linkHidden, setlinkHidden] = useState(false)

    setTimeout(() => {
        sethidden(true)
    }, 500);

    setTimeout(() => {
        setlinkHidden(true)
    }, 1500);

    return (
        <div className="page-essai">
            <div className="cube" >
                <Link to='/crypto' className={linkHidden ? '':'disabled'}>
                    <div className={hidden ? "face a showA": 'hiddenA'}>
                        <span>Crypto</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
                <Link to='/about' className={linkHidden ? '':'disabled'}>
                    <div className={hidden ? "face b showB": 'hiddenB'}>
                        <span>About</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
                <Link to='/contacts' className={linkHidden ? '':'disabled'}>                  
                    <div className={hidden ? "face c showC": 'hiddenC'}>
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
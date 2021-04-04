import React from 'react';
import Header from '../components/Header';
import Social from '../components/Social';

const About = () => {
    return (
        <div className="page-about">
            <Header />
                <div className="background">
                    <Social />
                </div>
                <div className="main">
                <h2>About</h2>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae facere rerum maxime ratione perferendis natus dolor ipsum distinctio temporibus similique fuga officiis a nesciunt odio, praesentium soluta illum voluptas doloremque veniam modi? Hic alias a maxime quo voluptates distinctio deserunt consequatur quod quam sapiente tempora rerum, provident reiciendis ratione.</p>
            </div>
        </div>
    );
};

export default About;
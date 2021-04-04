import React from 'react';
import Header from '../components/Header';
import Social from '../components/Social';

const Home = () => {
  return (
    <div className="page-home">
      <Header />
      <div className="background">
        <Social />
      </div>
      <div className="home">
        <h2 className="home--title">Welcome</h2>
          <div className="home-content">
            <h3>So, you might be wondering : What's going on here ?</h3>
            <div className="children">
              <p>Actually, not so much ... I know, it's disappointing... But it's my first web app ! So... It's fine if you don't enjoy it as much as I do !</p>

              <p>I'm not trying to make something cool, I'm just learning stuff, some might say that... It looks more as if I've learn nothing yet ! And I agree ! This is pretty bad, but the purpose here is not to show off my skills (mainly because I think they're a no-thing right now) but to try some stuff. New techniques and everything ! Also, it'ld be great to keep this as a reminder of how bad I "was" (or "am"... I don't know... Because it's right now but in the future...) and how much I've learned by the time I'll be reading this </p>

              <p>If you've made it this far, thank you for your time and take care ! 
                I hope you'll find something interesting here !
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
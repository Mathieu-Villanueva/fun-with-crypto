import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div >
      <Header />
      <div className="main">
        <h2>Welcome</h2>
          <div className="second">
            <div className="children">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas assumenda, consequuntur quisquam voluptas perspiciatis ab ipsum laudantium ipsam magnam, provident sed laboriosam aspernatur voluptatem est? Id nostrum veritatis eaque.</p>
              <p>Rem placeat dicta quibusdam mollitia omnis quisquam vitae dolore doloremque atque ut fugiat consequuntur, impedit repellendus, culpa cupiditate. Molestiae optio porro nobis modi corporis eligendi expedita quaerat, voluptas adipisci delectus.</p>
              <p>Enim tenetur libero assumenda molestiae excepturi fuga ducimus fugiat voluptatum, porro aspernatur ipsam voluptas facere quia ullam incidunt quam non ex soluta, culpa id odit, deleniti rerum! Ipsa, corporis reprehenderit!</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import logo from './logo.svg';
import Crypto from './pages/Crypto';
import Essai from './pages/Essai';

function App() {
  return (
    <div className="App">
          <div className="react-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="page-container">
            <Switch>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/crypto" exact>
                <Crypto />
              </Route>
              <Route path='/about' exact >
                <About />
              </Route>
              <Route path='/contacts' exact>
                <Contact/>
              </Route>
              <Route path='/' exact>
                <Essai />
              </Route>
            </Switch>  
          </div>
    </div>
  );
}

export default App;

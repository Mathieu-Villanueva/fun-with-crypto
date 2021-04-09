import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import logo from './logo.svg';
import Crypto from './pages/Crypto';

function App() {
  return (
    <div className="App">
          <img src={logo} className="react-logo" alt="logo" />
          <div className="page-container">
            <Switch>
              <Route path="/" exact>
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
            </Switch>  
          </div>
    </div>
  );
}

export default App;

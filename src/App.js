import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Crypto from './pages/Crypto';

function App() {
  return (
    <div className="App">
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

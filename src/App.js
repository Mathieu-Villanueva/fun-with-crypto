import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
          <div className="react-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="page-container">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path='/about' exact >
                <About />
              </Route>
              <Route path='/contacts' exact>
                <Contact/>
              </Route>
              <Route >
              </Route>
            </Switch>  
          </div>
    </div>
  );
}

export default App;

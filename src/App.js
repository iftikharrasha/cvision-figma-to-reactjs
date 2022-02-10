import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import Home from './Pages/Home/Home.js';
import NotFound from './Pages/NotFound/NotFound.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Sass/style.css';

function App() {
  AOS.init({
    once: false,
  });

  return (
    <div className="App">
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path="/home">
                           <Home/>
                    </Route>
                    <Route exact path="/">
                           <Home/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;

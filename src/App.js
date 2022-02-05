import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import './Sass/style.css';
import NotFound from './Pages/NotFound/NotFound.js';

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path="/home">
                           
                    </Route>
                    <Route exact path="/">
                        
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

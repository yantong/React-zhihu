import React, { Component,Fragment} from 'react';
// import './App.css';
import Login from './page/login';
import Home from './page/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
            </Fragment>
        </Router>
    );
  }
}

export default App;

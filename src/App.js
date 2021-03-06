import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

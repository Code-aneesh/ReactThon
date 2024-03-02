

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

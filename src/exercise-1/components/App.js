import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import Products from './Products';

class App extends Component {
  state = {
    user: {
      username: 'XXX',
      gender: 'Female',
      work: 'IT Industry',
      website: '/my-profile',
    },
    company: 'ThoughtWorks Local',
    location: "Xi'an",
  };

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/my-profile'>My Profile</Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route exact path='/my-profile'>
            <Profile user={this.state.user} />
          </Route>
          <Route exact path='/about-us'>
            <About
              company={this.state.company}
              location={this.state.location}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

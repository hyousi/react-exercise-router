import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import Products from './Products';
import Navbar from './Navbar';

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
        <Navbar />
        <main className='container'>
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
            <Route exact path='/goods'>
              <Redirect to='/products' />
            </Route>
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;

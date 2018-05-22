import React, { Component } from 'react';
import Header from './components/base/Header';
import SideBar from './components/base/SideBar';
import { Route, Router } from 'react-router';

import Home from './views/Home';
import Movies from './views/Movies';
import MovieFormView from './views/MovieFormView';
import Theaters from './views/Theaters';

class App extends Component {

  render() {
    return (
      <Router history = { this.props.history }>
        <div class="app">
          <Header />
          <SideBar />
          <Route exact path='/' component={Home}/>
          <Route exact path='/movies' component={Movies}/>
          <Route path='/movies/:movieId' component={MovieFormView}/>
          <Route path='/theaters' component={Theaters}/>
          <Route path='/theaters/:theaterId' component={Theaters}/>
          
        </div>
      </Router>
    );
  }
}

export default App;

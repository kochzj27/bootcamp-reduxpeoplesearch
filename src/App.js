import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchList from './components/SearchList/SearchList';
import Profile from './components/Profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/profile' component={Profile} />
          <Route path='/' exact component={SearchList} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './images/logo.svg';
import './styles/App.css';

var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

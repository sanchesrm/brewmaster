import React, { Component } from 'react';
import logo from './logo.svg';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import {Button} from 'react-materialize'
import './App.css';
import BeerList from './Components/beerListComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button waves='light'>
            EDIT ME
        </Button>
        <BeerList/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

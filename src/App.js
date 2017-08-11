import React, { Component } from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import {Button} from 'react-materialize'
import './App.css';
import CustomRouter from './Components/customRouter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Brewmaster</h2>
        </div>
        <Button waves='light'>
            ADD BEER
        </Button>
        <CustomRouter/>
      </div>
    );
  }
}

export default App;

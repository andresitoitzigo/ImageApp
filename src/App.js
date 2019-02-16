import React, { Component } from 'react';
import Login from './Components/Login/login'
import NavBar from './Components/NavBar/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <Login/>

      </div>
    );
  }
}

export default App;

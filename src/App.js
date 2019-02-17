import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home/home';
import Register from './Components/Register/register'
import Nav from './Components/NavBar/navbar'


class App extends Component {
  render () {
    return(
      
      <BrowserRouter>
        <div>
          <Nav/>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
        
        </div>

      </BrowserRouter>
     
    )
  }
}
export default App;
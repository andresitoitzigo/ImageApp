import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import Nav from './Components/NavBar/navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Publication from './Components/Publication/publication';
import Contacto from './Components/Contactos/contacto';
library.add(faIgloo)
library.add(faCoffee)


class App extends Component {
  render () {
    return(
      
      <BrowserRouter>
        <div>
          <Nav/>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Login} />
          <Route path="/publicaciones" component={Publication} />
          <Route path="/contacto" component={Contacto} />
        
        </div>

      </BrowserRouter>
     
    )
  }
}
export default App;
import React, { Component } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class NavBar extends Component {
  render() {
    return (
        <div className="Header">
            <nav className="">
                <ul class="">
                    <li >
                    <NavLink exact to="/" activeClassName="is-selected">
                        Inicio
                    </NavLink>
                    </li>
                    <li class="item">
                    <NavLink to="/register" activeClassName="is-selected">
                        Registrar
                    </NavLink>
                    </li>
                    <li class="ajustes">
                    <NavLink to="/publicaciones" activeClassName="is-selected">
                        Explorar
                    </NavLink>
                    </li>
                    <li class="contacto">
                    <NavLink  to="/contacto" activeClassName="is-selected">
                        Contacto
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
  }
}

export default NavBar;
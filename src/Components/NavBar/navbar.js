import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
        <div class="Header">
            <nav class="">
                <ul class="">
                    <li >
                    <a  class="servicios-item">
                        inicio
                    </a>
                    </li>
                    <li class="item">
                    <a  class="servicios-item">
                        perfil
                    </a>
                    </li>
                    <li class="item">
                    <a  class="servicios-item">
                        Ajustes
                    </a>
                    </li>
                    <li class="item">
                    <a  class="servicios-item">
                        contacto
                    </a>
                    </li>
                </ul>
            </nav>
        </div>

    );
  }
}

export default NavBar;
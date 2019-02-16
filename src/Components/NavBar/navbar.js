import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
        <div class="cabecera">
            <nav class="navergar-servicios">
                <ul class="lista-item">
                    <li class="item">
                        <a href="#" class="servicios-item">
                            Logo
                        </a>
                    </li>
                    <li class="item">
                    <a href="#" class="servicios-item">
                        imagenes
                    </a>
                    </li>
                    <li class="item">
                    <a href="#" class="servicios-item">
                        perfil
                    </a>
                    </li>
                    <li class="item">
                    <a href="#" class="servicios-item">
                        inicia sesion
                    </a>
                    </li>
                    <li class="item">
                    <a href="#" class="servicios-item">
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
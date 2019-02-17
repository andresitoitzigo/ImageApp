import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="containers">
        <div className="formindex">
          <h1>Iniciar</h1>
          <form>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className=""
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className=""
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Inicia Sesion</button>
              <small>Registrate</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default Login;
import React, { Component } from 'react';
import './register.css'

class Register extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Inicia Sesion</h1>
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
              <button type="submit">Crear Cuenta</button>
              <small>¿Ya tienes una Cuenta Existente?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default Register;
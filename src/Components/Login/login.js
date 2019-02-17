import React, { Component } from 'react'
import { connect } from 'react-redux'
import prueba from './../../redux/actions/actions'

import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    console.log(props.hola)
  }

  handleChange = e => {
    const {
      target: { value = '' } = {
        value: ''
      }
    } = e
    console.log('cambió')
    this.props.prueba(value)
  }

  handleChanges = e => {
    console.log(this.props.hola, e, 'cambiós')
  }
  render() {
    console.log(this.props.hola, 'Render')
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account {this.props.hola}</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Nombre</label>
              <input
                className=""
                placeholder="Nombres"
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Apellidos</label>
              <input
                className=""
                placeholder="Apellidos"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChanges}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className=""
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                // onChange={}
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
                // onChange={}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Crear Cuenta</button>
              <small>¿Ya tienes una Cuenta Existente?</small>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    hola: state.hola
  }
}
const mapDispatchToProps = {
  prueba
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

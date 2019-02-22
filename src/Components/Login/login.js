import React, { Component } from 'react'
import { connect } from 'react-redux'
import prueba from './../../redux/actions/actions'

import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    console.log(props.hola)
  }

  state = {
    email: '',
    password: '',
    displayName: 'andrea'
  }
  
  handleSubmit = (e) => { 
    const { email, displayName, password} = this.state
    console.log(email, displayName, password,'verga');
    fetch('http://localhost:4000/registro',{
      method: 'POST',
      header:{
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        email: email,
        password: password,
        displayName: displayName
      })
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })

    e.preventDefault();

  }
  nameHandleChange = e => {
    const {
      target: { value = '' } = {
        value: ''
      }
    } = e
    console.log('cambió')
    if(value) this.setState({displayName: value})
    this.props.prueba(value)
  }
  emailHandleChange = e => {
    const {
      target: { value = '' } = {
        value: ''
      }
    } = e
    console.log('cambió')
    if(value) this.setState({email: value})
    this.props.prueba(value)
  }
  passwordHandleChange = e => {
    const {
      target: { value = '' } = {
        value: ''
      }
    } = e
    console.log('cambió')
    if(value) this.setState({password: value})
    this.props.prueba(value)
  }

  handleChanges = e => {
    console.log(this.props.hola, e, 'cambiós')
  }
  render() {
    console.log(this.state.email, 'Render')
    return (
      <div className="containers">
        <div className="formindex">
          <h1>Create Account {this.props.hola}</h1>
          <form onSubmit={this.handleSubmit} >
            <div className="firstName">
              <label htmlFor="firstName">Nombre</label>
              <input
                className=""
                placeholder="Nombres"
                type="text"
                name="firstName"
                onChange={this.nameHandleChange}
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
                onChange={this.emailHandleChange}
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
                onChange={this.passwordHandleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Inicia Sesion</button>
              <small>Registrate</small>
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

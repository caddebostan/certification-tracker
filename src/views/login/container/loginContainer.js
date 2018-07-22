import React, { Component } from 'react';
// Components
import LoginView from '../view/loginView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <LoginView />;
  }
}

export default LoginContainer;

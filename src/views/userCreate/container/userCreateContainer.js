import React, { Component } from 'react';
// Components
import UserCreateView from '../view/userCreateView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class UserCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <UserCreateView />;
  }
}

export default UserCreateContainer;

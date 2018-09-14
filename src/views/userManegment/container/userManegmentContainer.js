import React, { Component } from 'react';
// Components
import UserManegmentView from '../view/userManegmentView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class UserManegmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <UserManegmentView />;
  }
}

export default UserManegmentContainer;

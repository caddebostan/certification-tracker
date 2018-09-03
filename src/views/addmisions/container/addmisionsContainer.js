import React, { Component } from 'react';
// Components
import AddmisionsView from '../view/addmisionsView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class AddmisionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AddmisionsView {...this.props} />;
  }
}

export default AddmisionsContainer;

import React, { Component } from 'react';
// Components
import ResearchView from '../view/researchView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class ResearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ResearchView {...this.props} />;
  }
}

export default ResearchContainer;

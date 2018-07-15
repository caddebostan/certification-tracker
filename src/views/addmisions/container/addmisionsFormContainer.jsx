import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import AddmisionsFormView from '../view/addmisionsFormView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class AddmisionsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedRowItem: null };
  }

  _submitAddmisionsForm = values => {
    console.log('_submitAddmisionsForm', values);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  _handleBackButton = () => {
    this.props.history.push('/basvurular');
  };

  render() {
    const { selectedRowItem } = this.state;

    return (
      <AddmisionsFormView
        selectedRowItem={selectedRowItem}
        submitAddmisionsForm={this._submitAddmisionsForm}
        handleBackButton={this._handleBackButton}
      />
    );
  }
}

AddmisionsFormContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AddmisionsFormContainer;

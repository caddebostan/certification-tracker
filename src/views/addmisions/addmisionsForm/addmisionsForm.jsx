import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import AddmisionsFormView from './addmisionsFormView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class AddmisionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      tableHead: [],
    };
  }

  // Component Life Cycles
  componentWillMount() {
    // TODO: when we got data from our database all this things sholuld be fix.
    this.setState({
      tableData: [
        ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
        ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
        ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
        ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
        ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten'],
        ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
      ],
      tableHead: ['ID', 'Name', 'Country', 'City', 'Salary'],
    });
  }

  // Component Functions

  _handleBackButton = () => {
    this.props.history.push('/basvurular');
  };

  render() {
    const { tableData, tableHead } = this.state;

    return (
      <AddmisionsFormView
        tableData={tableData}
        tableHead={tableHead}
        tableHeaderColor
        handleBackButton={this._handleBackButton}
      />
    );
  }
}

AddmisionsForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AddmisionsForm;

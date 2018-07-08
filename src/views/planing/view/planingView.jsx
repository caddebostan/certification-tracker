import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import PlaningListView from './planingListView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class PlaningView extends Component {
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
        ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
        ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
        ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
        ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten'],
        ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
        ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
      ],
      tableHead: ['ID', 'Name', 'Country', 'City', 'Salary'],
    });
  }

  // Component Functions

  _handleOnRowClick = id => {
    console.log(id);
    this.props.history.push('/planlama/form');
  };

  render() {
    const { tableData, tableHead } = this.state;

    return (
      <PlaningListView
        tableData={tableData}
        tableHead={tableHead}
        tableHeaderColor
        handleOnRowClick={this._handleOnRowClick}
      />
    );
  }
}

PlaningView.propTypes = {
  history: PropTypes.object.isRequired,
};

export default PlaningView;

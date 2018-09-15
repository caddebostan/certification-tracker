import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

// Components
import { RegularCard, ItemGrid, Table } from '../../';

/*
*            Props Name        Description                                     Value
* @props -->  props name here   description here                                Value Type Here
*
*/

class ClickableList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getContent = () => {
    const { tableData, tableHead, tableHeaderColor, handleOnRowClick, quickButtons } = this.props;
    return (
      <Table
        quickButtons={quickButtons}
        handleOnRowClick={e => handleOnRowClick(e)}
        tableHeaderColor={tableHeaderColor}
        tableHead={tableHead}
        tableData={tableData}
      />
    );
  };

  render() {
    const { title, subTitle } = this.props;

    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            plainCard={false}
            cardTitle={title}
            cardSubtitle={subTitle}
            content={this._getContent()}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

ClickableList.propTypes = {
  tableData: PropTypes.array,
  tableHead: PropTypes.array,
  quickButtons: PropTypes.array,
  tableHeaderColor: PropTypes.string,
  handleOnRowClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

ClickableList.defaultProps = {
  tableData: [],
  tableHead: [],
  quickButtons: [],
  tableHeaderColor: 'red',
  subTitle: 'List Sub Title',
  title: 'List Title',
};

export default ClickableList;

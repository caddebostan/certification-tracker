import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import { RegularCard, Table, ItemGrid } from '../../components';

/*
*            Props Name        Description                                     Value
*@props -->  isPlainCard      for table list backgorund style                 boolean
*
*/

const TableList = ({ ...props }) => {
  const {
    isPlainCard,
    cardTitle,
    cardSubtitle,
    tableHead,
    tableData,
    tableHeaderColor,
    handleOnRowClick,
  } = props;
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard={isPlainCard}
          cardTitle={cardTitle}
          cardSubtitle={cardSubtitle}
          content={
            <Table
              handleOnRowClick={e => handleOnRowClick(e)}
              tableHeaderColor={tableHeaderColor}
              tableHead={tableHead}
              tableData={tableData}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
};

TableList.defaultProps = {
  tableHeaderColor: 'gray',
  tableHead: [''],
  tableData: [['']],
  isPlainCard: false,
  cardTitle: '',
  cardSubtitle: '',
  handleOnRowClick: undefined,
};

TableList.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  isPlainCard: PropTypes.bool,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  handleOnRowClick: PropTypes.func,
};

export default TableList;

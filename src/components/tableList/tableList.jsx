import React from 'react';
import { Grid } from 'material-ui';

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

export default TableList;

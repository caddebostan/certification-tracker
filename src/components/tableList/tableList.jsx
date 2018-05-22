import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "../../components";

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
    handleOnRowClick
  } = props;
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard={props.isPlainCard}
          cardTitle={props.cardTitle}
          cardSubtitle={props.cardSubtitle}
          content={
            <Table
              handleOnRowClick={(e) => handleOnRowClick(e)}
              tableHeaderColor={props.tableHeaderColor}
              tableHead={props.tableHead}
              tableData={props.tableData}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;

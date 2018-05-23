import React, { Component } from 'react';
import { Grid } from "material-ui";

// Constants

// Components
import { RegularCard, ItemGrid, Table, AddmisionsForm, Button } from '../../../components';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class AddmisionsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      tableHead: [],
      selectedRowItem: null,
      cardSubtitle: "Basvuruyu sec ve onayla.",
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

  _handleOnRowClick = id => {
    this.setState({
      selectedRowItem: id,
      cardSubtitle: "Duzenle ve onayla.",
    })
  };

  _handleBackButton = () => {
    this.setState({
      selectedRowItem: null,
    })
  }

  _getContent = () => {
    const { selectedRowItem, tableData, tableHead, tableHeaderColor } = this.state;

    if (!selectedRowItem){
      return (
        <Table
          handleOnRowClick={(e) => this._handleOnRowClick(e)}
          tableHeaderColor={tableHeaderColor}
          tableHead={tableHead}
          tableData={tableData}
        />
      );
    } else {
      return (<AddmisionsForm selectedItemID={selectedRowItem}/> );
    }
  }

  _getFooter = () => {
    const { selectedRowItem } = this.state;
    if (selectedRowItem) {
      return (
        <div>
          <Button color="danger" onClick={() => this._handleBackButton()}>
            Geri
          </Button>
          <Button color="rose">Kaydet ve Onayla</Button>
        </div>
        
      );
    } else {
      return null;
    }
  }

  render() {
    const { cardSubtitle } = this.state;

    return (
      <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard={false}
          cardTitle="Basvurular"
          cardSubtitle={cardSubtitle}
          content={this._getContent()}
          footer={this._getFooter()}
        />
      </ItemGrid>
    </Grid>
    );
  }
}

export default AddmisionsView;

import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

// Constants

// Components
import { RegularCard, ItemGrid, AddmisionsForm, Button } from '../../../components';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class AddmisionsFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowItem: null,
    };
  }

  _getContent = () => {
    const { selectedRowItem } = this.state;

    return <AddmisionsForm selectedItemID={selectedRowItem} />;
  };

  _getFooter = () => (
    <div>
      <Button color="danger" onClick={() => this._handleBackButton()}>
        Geri
      </Button>
      <Button color="rose">Kaydet ve Onayla</Button>
    </div>
  );

  _handleBackButton = () => {
    /* eslint-disable-next-line */
    this.props.history.push('/basvurular');
  };

  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            plainCard={false}
            cardTitle="Basvurular"
            cardSubtitle="Basvuruyu sec ve onayla."
            content={this._getContent()}
            footer={this._getFooter()}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default AddmisionsFormView;

import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

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
      cardSubtitle: 'Basvuruyu sec ve onayla.',
    };
  }

  _getContent = () => {
    const { selectedRowItem } = this.state;

    return <AddmisionsForm selectedItemID={selectedRowItem} />;
  };

  _getFooter = () => {
    const { handleBackButton } = this.props;
    return (
      <div>
        <Button color="danger" onClick={() => handleBackButton()}>
          Geri
        </Button>
        <Button color="rose">Kaydet ve Onayla</Button>
      </div>
    );
  };

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

AddmisionsFormView.propTypes = {
  handleBackButton: PropTypes.func.isRequired,
};

export default AddmisionsFormView;

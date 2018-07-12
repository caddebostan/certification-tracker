import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { submit, isPristine, isSubmitting } from 'redux-form';

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

  _submitAddmisionsForm = values => {
    console.log('_submitAddmisionsForm', values);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  _getContent = () => {
    const { selectedRowItem } = this.state;

    return (
      <AddmisionsForm selectedItemID={selectedRowItem} onSubmit={this._submitAddmisionsForm} />
    );
  };

  _getFooter = () => {
    const { dispatch, pristine, submitting } = this.props;
    return (
      <div>
        <Button color="danger" onClick={() => this._handleBackButton()}>
          Geri
        </Button>
        <Button
          color="rose"
          disabled={pristine || submitting}
          onClick={() => dispatch(submit('AddmisionsForm'))}
        >
          Kaydet ve Onayla
        </Button>
      </div>
    );
  };

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

const mapStateToProps = state => ({
  pristine: isPristine('AddmisionsForm')(state),
  submitting: isSubmitting('AddmisionsForm')(state),
});

AddmisionsFormView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AddmisionsFormView);

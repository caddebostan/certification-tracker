import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submit, isPristine, isSubmitting, isValid } from 'redux-form';

import { RegularCard, ItemGrid, LoginForm, Button } from '../../../components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getContent = () => {
    const { submitLoginForm } = this.props;

    return <LoginForm onSubmit={submitLoginForm} />;
  };

  _getFooter = () => {
    const { dispatch, formValid } = this.props;
    return (
      <Button color="success" disabled={!formValid} onClick={() => dispatch(submit('LoginForm'))}>
        Giris
      </Button>
    );
  };

  render() {
    return (
      <Grid justify="center" container>
        <ItemGrid xs={12} sm={12} md={6}>
          <RegularCard
            plainCard={false}
            cardTitle="Giris"
            content={this._getContent()}
            footer={this._getFooter()}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  formValid: PropTypes.func.isRequired,
  submitLoginForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pristine: isPristine('LoginForm')(state),
  submitting: isSubmitting('LoginForm')(state),
  isValid: isValid('LoginForm')(state),
});

export default connect(mapStateToProps)(Login);

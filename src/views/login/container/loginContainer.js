import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../../actions/authAction';

// Components
import LoginView from '../view/loginView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _submitLoginForm = values => {
    const { dispatch } = this.props;

    dispatch(login({ email: values.kullaniciAdi, password: values.kullaniciPassword }));
  };

  render() {
    return <LoginView submitLoginForm={this._submitLoginForm} />;
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(LoginContainer);

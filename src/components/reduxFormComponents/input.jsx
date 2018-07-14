import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomInput } from '../../components';

class Input extends Component {
  renderField = field => {
    const {
      meta: { touched, error },
    } = field;
    return (
      <div>
        <CustomInput
          classes={field.classes}
          labelProps={field.labelProps}
          error={touched && error}
          success={touched && !error}
          labelText={field.labelText}
          helperText={field.helpText}
          value={field.value}
          onChange={field.onChange}
          placeholder={field.placeholder}
          disabled={field.disabled}
          type={field.type}
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{ ...field.input, ...field.inputProps }}
        />
      </div>
    );
  };

  render() {
    const {
      name,
      placeholder,
      labelText,
      validate,
      value,
      onChange,
      disabled,
      type,
      helpText,
      inputProps,
    } = this.props;
    return (
      <Field
        name={name}
        component={this.renderField}
        placeholder={placeholder}
        labelText={labelText}
        validate={validate}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        helpText={helpText}
        inputProps={inputProps}
      />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  validate: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  helpText: PropTypes.string,
  inputProps: PropTypes.object,
};

Input.defaultProps = {
  placeholder: '',
  labelText: '',
  validate: [],
  value: '',
  onChange: undefined,
  disabled: false,
  type: '',
  helpText: '',
  inputProps: {},
};

export default Input;

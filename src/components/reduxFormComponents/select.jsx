import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomSelect } from '../../components';

class Select extends Component {
  renderField = field => {
    const {
      meta: { touched, error },
    } = field;
    return (
      <CustomSelect
        labelText={field.labelText}
        value={field.name}
        classes={field.classes}
        helperText={field.helperText}
        isChecked={field.isChecked}
        label={field.label}
        formControlProps={{
          fullWidth: true,
          ...field.formControlProps,
        }}
        error={touched && error}
        success={touched && !error}
        checkboxProps={field.input}
      />
    );
  };

  render() {
    const {
      name,
      labelText,
      validate,
      value,
      helperText,
      formControlProps,
      classes,
      isChecked,
      label,
    } = this.props;
    return (
      <Field
        name={name}
        component={this.renderField}
        validate={validate}
        labelText={labelText}
        value={value}
        classes={classes}
        helperText={helperText}
        isChecked={isChecked}
        label={label}
        formControlProps={formControlProps}
      />
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.object,
  labelText: PropTypes.string,
  validate: PropTypes.object,
  value: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  formControlProps: PropTypes.object,
};

Select.defaultProps = {
  label: '',
  labelText: '',
  validate: [],
  value: '',
  formControlProps: {},
  helperText: '',
  classes: {},
};

export default Select;

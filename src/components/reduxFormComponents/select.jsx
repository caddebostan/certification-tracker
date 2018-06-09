import React, { Component } from 'react';
import { Field } from 'redux-form';

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

export default Select;

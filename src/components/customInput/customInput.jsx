import React from 'react';
import { withStyles, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';

import customInputStyle from '../../assets/jss/material-dashboard-react/customInputStyle';

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    type,
    helperText,
    disabled,
  } = props;

  return (
    <FormControl
      {...formControlProps}
      className={`${formControlProps.className} ${classes.formControl}`}
      error={error}
      disabled={disabled}
    >
      {labelText !== undefined ? (
        <InputLabel htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      <Input type={type} id={id} {...inputProps} />
      <FormHelperText>{error || helperText}</FormHelperText>
    </FormControl>
  );
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  formControlProps: PropTypes.object,
  labelText: PropTypes.string,
  id: PropTypes.string,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  success: PropTypes.bool,
  type: PropTypes.string,
  helperText: PropTypes.string,
};

CustomInput.defaultProps = {
  formControlProps: {},
  labelText: '',
  id: '',
  labelProps: {},
  inputProps: {},
  error: false,
  disabled: false,
  success: false,
  type: '',
  helperText: '',
};

export default withStyles(customInputStyle)(CustomInput);

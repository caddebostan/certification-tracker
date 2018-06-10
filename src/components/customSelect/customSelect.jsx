import React from 'react';
import { withStyles, FormControl, Checkbox, FormControlLabel } from '@material-ui/core';
import { Clear, Check } from '@material-ui/icons';
import PropTypes from 'prop-types';
import customSelectStyle from '../../assets/jss/material-dashboard-react/customInputStyle';

function CustomSelect({ ...props }) {
  const {
    classes,
    formControlProps,
    error,
    success,
    isChecked,
    value,
    label,
    checkboxProps,
  } = props;

  return (
    <FormControl
      {...formControlProps}
      className={`${formControlProps.className} ${classes.formControl}`}
    >
      <FormControlLabel
        control={<Checkbox checked={isChecked} value={value} {...checkboxProps} />}
        label={label}
      />
      {error ? (
        <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
      ) : success ? (
        <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
      ) : null}
    </FormControl>
  );
}

CustomSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  checkboxProps: PropTypes.object,
};

CustomSelect.defaultProps = {
  formControlProps: {},
  error: false,
  success: false,
  value: '',
  label: '',
  checkboxProps: {},
};

export default withStyles(customSelectStyle)(CustomSelect);

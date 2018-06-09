import React from 'react';
import { withStyles, FormControl, Checkbox, FormControlLabel } from '@material-ui/core';
import { Clear, Check } from '@material-ui/icons';
import customSelectStyle from '../../assets/jss/material-dashboard-react/customInputStyle';

function CustomSelect({ ...props }) {
  /* eslint-disable */
  const {
    classes,
    formControlProps,
    labelText,
    id,
    error,
    success,
    helperText,
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
/* eslint-enable */

export default withStyles(customSelectStyle)(CustomSelect);

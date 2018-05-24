import React from 'react';
import { withStyles, FormControl, InputLabel, Input } from '@material-ui/core';
import { Clear, Check } from '@material-ui/icons';
import cx from 'classnames';

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
    success,
    type,
    helperText,
  } = props;

  const labelClasses = cx({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
  });
  const underlineClasses = cx({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });
  const marginTop = cx({
    [classes.marginTop]: labelText === undefined,
  });
  return (
    <FormControl
      {...formControlProps}
      className={`${formControlProps.className} ${classes.formControl}`}
    >
      {labelText !== undefined ? (
        <InputLabel className={classes.labelRoot + labelClasses} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          // border-bottom: 0px solid rgba(0, 0, 0, 0);
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        helperText={helperText}
        type={type}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
      ) : success ? (
        <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
      ) : null}
    </FormControl>
  );
}

export default withStyles(customInputStyle)(CustomInput);

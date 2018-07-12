import React from 'react';
import { withStyles, FormControl, InputLabel, Input } from '@material-ui/core';
import PropTypes from 'prop-types';
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
  error: PropTypes.bool,
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
  success: false,
  type: '',
  helperText: '',
};

export default withStyles(customInputStyle)(CustomInput);

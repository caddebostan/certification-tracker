import React from 'react';
import { withStyles, FormControl, Checkbox, FormControlLabel, FormLabel } from 'material-ui';
import { Clear, Check } from '@material-ui/icons';
import cx from 'classnames';

import customSelectStyle from '../../assets/jss/material-dashboard-react/customInputStyle';

function CustomSelect({ ...props }) {
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
  } = props;

  const labelClasses = cx({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
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
      className={formControlProps.className + ' ' + classes.formControl}
    >
      <FormControlLabel control={<Checkbox checked={isChecked} value={value} />} label={label} />
      {error ? (
        <Clear className={classes.feedback + ' ' + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

export default withStyles(customSelectStyle)(CustomSelect);

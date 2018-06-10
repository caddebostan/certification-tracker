import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import cx from 'classnames';

import buttonStyle from '../../assets/jss/material-dashboard-react/buttonStyle';

function RegularButton({ ...props }) {
  const { classes, color, round, children, fullWidth, disabled, ...rest } = props;
  const btnClasses = cx({
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
  });
  return (
    <Button {...rest} className={`${classes.button} ${btnClasses}`}>
      {children}
    </Button>
  );
}

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'simple',
    'transparent',
  ]),
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

RegularButton.defaultProps = {
  color: undefined,
  round: false,
  fullWidth: false,
  disabled: false,
};

export default withStyles(buttonStyle)(RegularButton);

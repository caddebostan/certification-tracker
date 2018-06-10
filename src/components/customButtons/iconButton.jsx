import React from 'react';
import { withStyles, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import iconButtonStyle from '../../assets/jss/material-dashboard-react/iconButtonStyle';

function IconCustomButton({ ...props }) {
  const { classes, color, children, customClass, ...rest } = props;
  return (
    <IconButton
      {...rest}
      className={
        classes.button +
        (color ? ` ${classes[color]}` : '') +
        (customClass ? ` ${customClass}` : '')
      }
    >
      {children}
    </IconButton>
  );
}

IconCustomButton.propTypes = {
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
  ]),
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
};

IconCustomButton.defaultProps = {
  color: undefined,
  customClass: undefined,
  disabled: false,
};

export default withStyles(iconButtonStyle)(IconCustomButton);

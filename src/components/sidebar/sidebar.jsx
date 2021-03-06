import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import {
  withStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { HeaderLinks } from '../';

import sidebarStyle from '../../assets/jss/material-dashboard-react/sidebarStyle';

const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1;
  }
  // eslint-disable-next-line
  const { classes, color, logo, image, logoText, routes, open, handleDrawerToggle } = props;
  const links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.redirect) return null;
        const listItemClasses = cx({
          [` ${classes[color]}`]: activeRoute(prop.path),
        });
        const whiteFontClasses = cx({
          [` ${classes.whiteFont}`]: activeRoute(prop.path),
        });
        return (
          <NavLink to={prop.path} className={classes.item} activeClassName="active" key={key}>
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                <prop.icon />
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  const brand = (
    <div className={classes.logo}>
      <a href="/" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: `url(${image})` }} />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: `url(${image})` }} />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(sidebarStyle)(Sidebar);

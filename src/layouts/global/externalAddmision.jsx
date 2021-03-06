import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { withStyles } from '@material-ui/core';

import { Footer } from '../../components';

import globalRoutes from '../../routes/globalRoutes';

import appStyle from '../../assets/jss/material-dashboard-react/appStyle';

const switchRoutes = (
  <Switch>
    {globalRoutes.map((prop, key) => {
      if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: false,
  };
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate() {
    // eslint-disable-next-line
    this.refs.mainPanel.scrollTop = 0;
  }
  getRoute() {
    return this.props.location.pathname !== '/maps';
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        {/* eslint-disable-next-line */}
        <div className={classes.globalMainPanel} ref="mainPanel">
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(appStyle)(App);

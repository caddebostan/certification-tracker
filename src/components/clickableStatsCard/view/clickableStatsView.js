import React, { Component, Fragment } from 'react';
import { withStyles, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import statsCardStyle from '../../../assets/jss/material-dashboard-react/statsCardStyle';

class ClickableStatsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, title, description, statLink, small, statText } = this.props;

    return (
      <Fragment>
        <Link to="dashboard">
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography component="p" className={classes.cardCategory}>
                {title}
              </Typography>
              <Typography variant="headline" component="h2" className={classes.cardTitle}>
                {description}{' '}
                {small !== undefined ? (
                  <small className={classes.cardTitleSmall}>{small}</small>
                ) : null}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <div className={classes.cardStats}>
                {statLink !== undefined ? (
                  <a href={statLink.href} className={classes.cardStatsLink}>
                    {statLink.text}
                  </a>
                ) : statText !== undefined ? (
                  statText
                ) : null}
              </div>
            </CardActions>
          </Card>
        </Link>
      </Fragment>
    );
  }
}

ClickableStatsView.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.node,
  description: PropTypes.node,
  small: PropTypes.node,

  statLink: PropTypes.object,
  statText: PropTypes.node,
};

ClickableStatsView.defaultProps = {
  title: '',
  description: '',
  small: '',
  statLink: {},
  statText: '',
};
export default withStyles(statsCardStyle)(ClickableStatsView);

import React from 'react';
import { withStyles, Button } from '@material-ui/core';

import { StatsCard } from '../../../components';

import dashboardStyle from '../../../assets/jss/material-dashboard-react/dashboardStyle';

class ClickableStatsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleOnStateClick = () => {
    alert('brave tikladin lan!');
    const { handleOnClick } = this.props;

    if (handleOnClick) {
      handleOnClick();
    }
  };

  render() {
    const {
      icon,
      title,
      iconColor,
      description,
      small,
      statIcon,
      statIconColor,
      statLink,
    } = this.props;

    return (
      <div>
        <Button onClick={() => this._handleOnStateClick()}>
          <StatsCard
            iconColor={iconColor}
            title={title}
            description={description}
            small={small}
            statIcon={statIcon}
            statIconColor={statIconColor}
            statLink={statLink}
          />
        </Button>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(ClickableStatsView);

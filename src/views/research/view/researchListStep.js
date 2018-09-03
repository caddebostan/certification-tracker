import React from 'react';
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  Accessibility,
} from '@material-ui/icons';
import { withStyles, Grid } from '@material-ui/core';

import { ItemGrid, ClickableStats } from '../../../components';

import dashboardStyle from '../../../assets/jss/material-dashboard-react/dashboardStyle';

class ResearchListStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <ClickableStats
              icon={ContentCopy}
              iconColor="orange"
              title="Bilmem ne belgesi"
              description="49"
              small="sub title"
              statIcon={Warning}
              statIconColor="danger"
              statLink={{ text: 'Get More Space...', href: '#pablo' }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <ClickableStats
              icon={Store}
              iconColor="green"
              title="title"
              description="description"
              small="sub title"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <ClickableStats
              icon={Store}
              iconColor="green"
              title="title"
              description="description"
              small="sub title"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <ClickableStats
              icon={Store}
              iconColor="green"
              title="title"
              description="description"
              small="sub title"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <ClickableStats
              icon={Store}
              iconColor="green"
              title="title"
              description="description"
              small="sub title"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <ClickableStats
              icon={Store}
              iconColor="green"
              title="title"
              description="description"
              small="sub title"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(ResearchListStep);

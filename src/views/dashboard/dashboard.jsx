import React, { Component, Fragment } from 'react';
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

import { StatsCard, TasksCard, RegularCard, Table, ItemGrid } from '../../components';

import dashboardStyle from '../../assets/jss/material-dashboard-react/dashboardStyle';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ContentCopy}
              iconColor="orange"
              title="Basvurular"
              description="49"
              small="Sirket"
              statIcon={Warning}
              statIconColor="danger"
              statLink={{ text: 'Get More Space...', href: '#pablo' }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Store}
              iconColor="green"
              title="Planlananlar"
              description="34"
              small="Basvuru"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Fixed Issues"
              description="75"
              statIcon={LocalOffer}
              statText="Tracked from Github"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="blue"
              title="Tamamlanan"
              description="+78"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <TasksCard />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="orange"
              cardTitle="Tum Basvurular"
              cardSubtitle="Basvuru planlama durumuna gore listelenir"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={['ID', 'Name', 'Salary', 'Country']}
                  tableData={[
                    ['1', 'Cocacole', '$36,738', 'Niger'],
                    ['2', 'Turkoz Ticaret', '$23,789', 'Curaçao'],
                    ['3', 'Bafra Un', '$56,142', 'Netherlands'],
                    ['4', 'Eris Un', '$38,735', 'Korea, South'],
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);

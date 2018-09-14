import React, { Component } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { Clear, Create, Reorder } from '@material-ui/icons';
import { ClickableList } from '../../../components';

export default class UserManegmentView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // TODO: when we got data from our database all this things sholuld be fix.
    this.setState({
      tableData: [['Ugur', 'ERDAL', 'Developer', 'Admin'], ['Ugur', 'ERDAL', 'Developer', 'Admin']],
      tableHead: ['Adi', 'Soyadi', 'Gorevi', 'Yetkisi', 'Islemler'],
    });
  }

  render() {
    const { tableData, tableHead } = this.state;
    return (
      <div>
        <Grid container>
          <ClickableList
            tableData={tableData}
            tableHead={tableHead}
            title="Planlama"
            subTitle="Planlanacak basvuruyu seciniz."
            tableHeaderColor
            quickButtons={
              <div>
                <IconButton
                  color="primary"
                  aria-label="Notifications"
                  aria-owns="menu-list"
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <Create />
                </IconButton>

                <IconButton
                  color="primary"
                  aria-label="Notifications"
                  aria-owns="menu-list"
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <Reorder />
                </IconButton>

                <IconButton
                  color="secondary"
                  aria-label="Notifications"
                  aria-owns="menu-list"
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <Clear />
                </IconButton>
              </div>
            }
          />
        </Grid>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { RegularCard, ItemGrid, LoginForm, Button } from '../../../components';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getContent = () => <LoginForm />;

  _getFooter = () => (
    <div>
      <Link to="dashboard">
        <Button color="success">Giris</Button>
      </Link>
    </div>
  );

  render() {
    return (
      <div>
        <Grid justify="center" container>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              plainCard={false}
              cardTitle="Giris"
              content={this._getContent()}
              footer={this._getFooter()}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import { RegularCard, ItemGrid, LoginForm, Button } from '../../../components';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getContent = () => <LoginForm />;

  _getFooter = () => (
    <div>
      <Button color="success">Giris</Button>
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

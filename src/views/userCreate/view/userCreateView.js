import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { RegularCard, ItemGrid, UserCreateForm, Button } from '../../../components';

export default class UserCreateView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getContent = () => <UserCreateForm />;

  _getFooter = () => (
    <Fragment>
      <Link to="dashboard">
        <Button color="success">Giris</Button>
      </Link>
    </Fragment>
  );

  render() {
    return (
      <Fragment>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              plainCard={false}
              cardTitle="Kullanici Olustur"
              content={this._getContent()}
              footer={this._getFooter()}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              plainCard={false}
              cardTitle="Giris"
              content={this._getContent()}
              footer={this._getFooter()}
            />
          </ItemGrid>
        </Grid>
      </Fragment>
    );
  }
}

import React, { Component } from 'react';

import { HomeView } from '../view/homeView';

export class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <HomeView />;
  }
}

export default HomeContainer;

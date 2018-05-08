import React, { Component } from 'react';

import { PageOneView } from '../view/pageOneView';

export class PageOneContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <PageOneView />;
  }
}

export default PageOneContainer;

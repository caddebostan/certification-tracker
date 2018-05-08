import React, { Component } from 'react';

import { PageTwoView } from '../view/pageTwoView';

export class PageTwoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <PageTwoView />;
  }
}

export default PageTwoContainer;

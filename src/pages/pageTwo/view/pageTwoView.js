import React, { Component } from 'react';

import { ExampleView } from '../../../components/example';

export class PageTwoView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        PageTwo
        <ExampleView />
      </div>
    );
  }
}

export default PageTwoView;

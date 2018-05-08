import React, { Component } from 'react';

import { ExampleView } from '../../../components/example';

export class PageOneView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        PageOne
        <ExampleView />
      </div>
    );
  }
}

export default PageOneView;

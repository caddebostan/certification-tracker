import React, { Component } from 'react';
import Button from 'material-ui/Button';

import { Menu } from '../../menu';

export class ContentView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <main className="main">{this.props.children}</main>;
  }
}

export default ContentView;

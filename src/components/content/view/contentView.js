import React, { Component } from 'react';
import { Button, Typography } from 'material-ui';
import { Menu } from '../../menu';

export class ContentView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Menu>
        <main className="content">{this.props.children}</main>
      </Menu>
    );
  }
}

export default ContentView;

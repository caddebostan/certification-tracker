import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Menu } from '../../menu';

export class ContentView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Menu>
        <main className="content">{children}</main>
      </Menu>
    );
  }
}

ContentView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentView;

import React, { Component } from 'react';
import Button from 'material-ui/Button';

export class ExampleView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Button color="secondary">Material UI</Button>
      </div>
    );
  }
}

export default ExampleView;

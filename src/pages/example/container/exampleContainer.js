import React, { Component } from 'react';

import ExampleView from '../view/exampleView';

export class ExampleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  showResults = values =>
    new Promise(resolve => {
      setTimeout(() => {
        // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        resolve();
      }, 500);
    });

  render() {
    return (
      <ExampleView
        onSubmit={this.showResults}
        initialValues={{
          sex: 'female',
          name: 'Jane Doe',
          cheese: 'Cheddar',
          thinCrust: true,
          pizzas: 1,
        }}
      />
    );
  }
}

export default ExampleContainer;

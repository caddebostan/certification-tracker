import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Material ui components
import { MuiThemeProvider } from 'material-ui/styles';
import { Theme } from './materialTheme';

// Pages
import { Home, PageOne, PageTwo, Example } from '../';
import { Content } from '../../components/content';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pageone" component={PageOne} />
            <Route exact path="/pagetwo" component={PageTwo} />
            <Route exact path="/example" component={Example} />
          </Switch>
        </Content>
      </MuiThemeProvider>
    );
  }
}

export default App;

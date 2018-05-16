import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import { Home, PageOne, PageTwo } from '../';
import { Content } from '../../components/content';
import { Menu } from '../../components/menu';

// Material ui components
import { MuiThemeProvider } from 'material-ui/styles';
import { Theme } from './materialTheme';

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
          </Switch>
        </Content>
      </MuiThemeProvider>
    );
  }
}

export default App;

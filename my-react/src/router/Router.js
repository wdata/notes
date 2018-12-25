import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RouterMobx from './containers/Mobx';

class RouterIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/mobx" component={RouterMobx}></Route>
        </Switch>
      </Router>
    );
  }
}

export default RouterIndex;

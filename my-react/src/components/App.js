import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mobx from './mobx/Mobx';

class App extends Component {
  render() {
    return (
      <div>
        // <Router>
        //   <Switch>
        //     <Route exact path="/mbox" component={Mobx}></Route>
        //   </Switch>
        // </Router>
      </div>
    );
  }
}

export default App;

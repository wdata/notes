import React, { Component } from 'react';
import { asyncComponent, load } from '../routerConfig';
import { Switch, Route } from 'react-router-dom';

const Mobx = asyncComponent(() => load('mobx/Mobx'));
const MobxLanding = asyncComponent(() => load('mobx/Landing'));
const MobxMain = asyncComponent(() => load('mobx/Main'));


class RouterMobx extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/mobx" component={Mobx}></Route>
        <Route exact path="/mobx/landing" component={MobxLanding}></Route>
        <Route exact path="/mobx/main" component={MobxMain}></Route>
      </Switch>
    );
  }
}

export default RouterMobx;

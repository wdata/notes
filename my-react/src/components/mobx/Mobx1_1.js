import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

let appState = observable({
  timer: 0
});

appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(action(function tick() {
  appState.timer += 1;
}), 1000);

@observer
class TimeView extends Component {
  onReset() {
    this.props.appState.resetTimer();
  }
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: { this.props.appState.timer }
      </button>
    )
  }
}

class Mobx11 extends Component {
  render() {
    return (
      <div>
        <h2>Mobx要点：</h2>
        <p>1. 定义状态并使其可观察</p>
        <p>2. 创建视图以响应状态的变化</p>
        <p>3. 更改状态</p>
        <TimeView appState={appState} />
      </div>
    );
  }
}

export default Mobx11;

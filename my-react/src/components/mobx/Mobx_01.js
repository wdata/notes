import React, { Component } from 'react';
import { observale } from 'mobx';
import { observer } from 'mobx-react';

let appState = observale({
  timer: 0
});

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

class Mobx01 extends Component {
  render() {
    return (
      <TimeView appState={appState} />
    );
  }
}

export default Mobx01;

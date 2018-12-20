import React, { Component } from 'react';
import Mobx01 from './Mobx_01';

class Mobx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const id = 0;
    return (
      <div className="mobx">
        {
          (() => {
            switch (id) {
              case 0: return <Mobx01 />;
              default: return <div>mobx</div>;
            }
          })()
        }
      </div>
    );
  }
}

export default Mobx;

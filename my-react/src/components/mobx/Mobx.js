import React, { Component } from 'react';
import Mobx11 from './Mobx1_1';
import Mobx12 from './Mobx1_2';
import Mobx21 from './Mobx2_1';

class Mobx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const id = 21;
    return (
      <div className="mobx">
        {
          (() => {
            switch (id) {
              case 11: return <Mobx11 />;
              case 12: return <Mobx12 />;
              case 21: return <Mobx21 />;
              default: return <div>mobx</div>;
            }
          })()
        }
      </div>
    );
  }
}

export default Mobx;

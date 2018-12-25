import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mobx.less';

class Mobx extends Component {
  render() {
    return (
       <div>
         <Link to="/mobx/landing">mobx实例1</Link>
       </div>
    );
  }
}

export default Mobx;

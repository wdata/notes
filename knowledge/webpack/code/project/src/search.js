'set strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import yangchaoyue from './assets/img/yangchaoyue.jpg'
// import './search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search Text <img src={yangchaoyue} />
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))

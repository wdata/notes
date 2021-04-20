'set strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import yangchaoyue from './assets/img/yangchaoyue.jpg'
// import 'lib-flexible'
// import './search.css';
import { a, c } from './tree-shaking'

// tree-shaking演示
if (false) {
  c()
}

class Search extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      Text: null
    }
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }
  render() {
    const funA = a()
    const { Text } = this.state
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        {funA}Search Text 搜索文字 <img src={yangchaoyue} onClick={this.loadComponent.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))

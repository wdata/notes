/*
 * @Author: 王凌军
 * @Date: 2021-02-19 17:20:30
 * @LastEditors: 王凌军
 * @LastEditTime: 2021-04-08 18:19:43
 * @Description: 请输入描述
 */
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
  render() {
    const funA = a()
    return (
      <div className="search-text">
        {funA}Search Text 搜索文字 <img src={yangchaoyue} />
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))

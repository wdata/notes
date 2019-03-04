import React, { Component } from 'react';

/* antd国际化 */
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

/* 全局样式 */
import '../common/css/common.less';

/* 全局数据 */
import { Provider } from 'mobx-react';
import store from '../state/store';

import RouterIndex from '../router/Router';


class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider {...store}>
          <RouterIndex />
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;

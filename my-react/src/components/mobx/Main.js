import React, { Component } from 'react';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import './Mobx.less';
import { Link } from 'react-router-dom';

const {
  Header, Content,
} = Layout;


@inject('Mobx')
@observer
class Main extends Component {
  render() {
    const { name, password } = this.props.Mobx;
    return (
      <Layout>
       <Header className="mobx-Header">
         <Link to="/mobx/landing" className="mobx-header__link">返回</Link>
         主页
       </Header>
       <Content className="mobx-main__content">
         <p>用户名：{ name }</p>
         <p>密码：{ password }</p>
       </Content>
     </Layout>
    );
  }
}

export default Main;

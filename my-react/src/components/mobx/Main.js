import React, { Component } from 'react';
import { Layout, Input, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import './Mobx.less';
import { Link } from 'react-router-dom';

const {
  Header, Content,
} = Layout;


@inject('Mobx')
@observer
class Main extends Component {


  handInputChange = (e, name) => {
    this.props.Mobx.landingSingle(e.target.value, name);
  }
  render() {
    const { name, password, pDetails, arr, arr2 } = this.props.Mobx;
    console.log(arr2, 'arr2');
    const span = arr.map((res, i) => {
      return <span key={i}>{ res }</span>;
    });
    return (
      <Layout>
       <Header className="mobx-Header">
         <Link to="/mobx/landing" className="mobx-header__link">返回</Link>
         主页
       </Header>
       <Content className="mobx-main__content">
         <p>用户名：{ name }</p>
         <p>密码：{ password }</p>
         <p>{ pDetails }</p>
         { span }
         <div className="main-input">
           <Input prefix={<Icon type="user"/>} placeholder="用户名" onChange={(e) => this.handInputChange(e, 'name')} />
           <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码" onChange={(e) => this.handInputChange(e, 'password')} />
         </div>
       </Content>
     </Layout>
    );
  }
}

export default Main;

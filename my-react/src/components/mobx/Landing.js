import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Input, Icon, Button, Checkbox } from 'antd';
import { inject } from 'mobx-react';
import './Mobx.less';

const {
  Header, Content,
} = Layout;

@Form.create()
@inject('Mobx')
class Landing extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.Mobx.landing(values);
        this.props.history.push('/mobx/main');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
     <Layout className="landing">
      <Header className="mobx-Header">Mobx</Header>
      <Content className="landing__content">
          <Form onSubmit={this.handleSubmit} className="login-form">
           <Form.Item>
             {getFieldDecorator('name', {
               rules: [{ required: true, message: '请输入用户名!' }],
             })(
               <Input prefix={<Icon type="user"/>} placeholder="Username" />
             )}
           </Form.Item>
           <Form.Item>
             {getFieldDecorator('password', {
               rules: [{ required: true, message: '请输入密码!' }],
             })(
               <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password" />
             )}
           </Form.Item>
           <Form.Item className="overflow-hidden">
             {getFieldDecorator('remember', {
               valuePropName: 'checked',
               initialValue: true,
             })(
               <Checkbox>记住账号</Checkbox>
             )}
             <Link className="forget-password" to="/mobx">忘记密码</Link>
           </Form.Item>
           <Button type="primary" htmlType="submit" className="landing-button">登陆</Button>
         </Form>
      </Content>
    </Layout>
    );
  }
}

export default Landing;

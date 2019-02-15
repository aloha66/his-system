import React, { useContext } from "react";
import { Form, Icon, Input, Button, Checkbox, Card, Alert } from "antd";
import "assets/Login.css";
import { usePost } from "hPub_";
import { UserContext } from "hooks/User.js";
import { withRouter } from "react-router-dom";

function NormalLoginForm(props) {
  let [fetch, { loading, error }] = usePost("http://localhost:1337/auth/local");

  let {
    history: { replace }
  } = props;
  let { setAuth } = useContext(UserContext);
  //登录
  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        fetch({
          identifier: values.username,
          password: values.password
        }).then(data => {
          //设置验证数据
          setAuth(data);
          //路由跳转
          replace("/");
        });
      }
    });
  }

  const { getFieldDecorator } = props.form;
  return (
    <div className="login-box">
      <Card title="登录">
        <Form onSubmit={handleSubmit} className="login-form">
          {error && <Alert message={error} type="error" />}
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "请输入用户名!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>记住我</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码?
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
export default withRouter(WrappedNormalLoginForm);

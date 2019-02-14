import React, { useState } from "react";
import axios from "axios";
import { Form, Icon, Input, Button, Checkbox, Card, Alert } from "antd";
import "../assets/Login.css";
import { usePost } from "../hooks/public";

function NormalLoginForm(props) {
  let [
    fetch,
    {
      data: { data },
      loading,
      error,
      setError
    }
  ] = usePost("http://localhost:1337/auth/local");

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        fetch({
          identifier: values.username,
          password: values.password
        }).then(data => {
          console.log("登录成功");
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
export default WrappedNormalLoginForm;

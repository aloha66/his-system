import React from "react";
//编辑患者

// function EditPatient() {
//   return "编辑患者";
// }

// export default EditPatient;

import { Form, Input, Select, Button, Radio, DatePicker } from "antd";

const { Option } = Select;
function EditPatient(props) {
  const { getFieldDecorator } = props.form;
  //提交
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 4
      }
    }
  };

  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "86"
  })(
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item {...formItemLayout} label="身份证号:">
        {getFieldDecorator("idcard", {
          rules: [
            {
              message: "请输入身份证号!"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="姓名:">
        {getFieldDecorator("name", {
          rules: [
            {
              required: true,
              message: "请输入姓名!"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="性别">
        {getFieldDecorator("sex", {
          rules: [
            {
              required: true,
              message: "请选择性别!"
            }
          ]
        })(
          <Radio.Group>
            <Radio value="a">男</Radio>
            <Radio value="b">女</Radio>
          </Radio.Group>
        )}
      </Form.Item>

      <Form.Item {...formItemLayout} label="出生日期">
        {getFieldDecorator("date", {
          rules: [
            {
              required: true,
              message: "请选择出生日期!"
            }
          ]
        })(<DatePicker />)}
      </Form.Item>

      <Form.Item {...formItemLayout} label="年龄:">
        {getFieldDecorator("age", {
          rules: [
            {
              required: true,
              message: "请输入年龄"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="联系电话:">
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "请输入联系电话"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
}

const WrappedEditPatient = Form.create({ name: "register" })(EditPatient);
export default WrappedEditPatient;

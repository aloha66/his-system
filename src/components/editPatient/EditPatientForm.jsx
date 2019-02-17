import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  Divider,
  InputNumber
} from "antd";

function EditPatient(props) {
  const { getFieldDecorator, resetFields } = props.form;
  let source = props.source || {};
  //清空数据
  useEffect(() => {
    resetFields();
  }, [props.visible]);

  //提交
  function handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    return new Promise((resolve, reject) => {
      props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          resolve(values);
        } else {
          reject(err);
        }
      });
    });
  }

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

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item {...formItemLayout} label="身份证号:">
        {getFieldDecorator("idcard", {
          rules: [
            {
              message: "请输入身份证号!"
            }
          ],
          initialValue: source.idcard
        })(<Input />)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="姓名:">
        {getFieldDecorator("name", {
          rules: [
            {
              required: true,
              message: "请输入姓名!"
            }
          ],
          initialValue: source.name
        })(<Input />)}
      </Form.Item>

      <Form.Item {...formItemLayout} label="联系电话:">
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "请输入联系电话"
            }
          ],
          initialValue: source.phone
        })(<Input />)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="出生日期">
        {getFieldDecorator("date", {
          rules: [
            {
              required: true,
              message: "请选择出生日期!"
            }
          ],
          initialValue: source.birthday
        })(<DatePicker />)}
      </Form.Item>

      <Form.Item {...formItemLayout} label="年龄:">
        {getFieldDecorator("age", {
          rules: [
            {
              required: true,
              message: "请输入年龄"
            }
          ],
          initialValue: source.age
        })(<InputNumber />)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="性别">
        {getFieldDecorator("sex", {
          rules: [
            {
              required: true,
              message: "请选择性别!"
            }
          ],
          initialValue: source.sex || 0
        })(
          <Radio.Group>
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
            <Radio value={0}>不详</Radio>
          </Radio.Group>
        )}
      </Form.Item>
      <Divider />
      <Button type="primary" htmlType="submit" block>
        保存
      </Button>
    </Form>
  );
}

const WrappedEditPatient = Form.create({ name: "register" })(EditPatient);

export default WrappedEditPatient;

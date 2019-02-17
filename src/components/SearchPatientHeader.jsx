import React from "react";
import { SearchBox } from "com/FormComs";
import { Form, Row, Col, Button, Input } from "antd";
import EditPatientModal from "com/editPatient/EditPatientModal";
function AdvancedSearchForm(props) {
  let {
    form: { getFieldDecorator }
  } = props;

  function handleSearch(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  }
  return (
    <SearchBox>
      <form onSubmit={handleSearch}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label={`患者姓名`}>
              {getFieldDecorator(`name`, {
                rules: [
                  {
                    message: "请输入患者姓名!"
                  }
                ]
              })(<Input placeholder="请输入患者姓名" />)}
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label={`联系电话`}>
              {getFieldDecorator(`phone`, {
                rules: [
                  {
                    message: "请输入患者联系电话!"
                  }
                ]
              })(<Input placeholder="请输入患者联系电话" />)}
            </Form.Item>
          </Col>
          <Col span={8} style={{ textAlign: "right", paddingTop: "5px" }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => props.form.resetFields()}
            >
              清空
            </Button>
            <EditPatientModal
              btn={(show, setShow) => (
                <Button
                  style={{ marginLeft: 16 }}
                  type="primary"
                  onClick={() => setShow(true)}
                >
                  新增患者
                </Button>
              )}
            />
          </Col>
        </Row>
      </form>
    </SearchBox>
  );
}

const WrappedAdvancedSearchForm = Form.create({ name: "advanced_search" })(
  AdvancedSearchForm
);

export default WrappedAdvancedSearchForm;

import React, { useState } from "react";
import RegPatientList from "com/tables/RegPatientList";

import ContentCom from "com/Content";
import { Form, Row, Col, Button, AutoComplete } from "antd";
import SearchPatientHeader from "com/SearchPatientHeader";
import { FormRowBox } from "com/FormComs";

function Reg(props) {
  let {
    form: { getFieldDecorator }
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("挂号");
  }
  return (
    <React.Fragment>
      <SearchPatientHeader />
      <ContentCom>
        <RegPatientList />
      </ContentCom>
      <form onSubmit={handleSubmit}>
        <ContentCom>
          <FormRowBox>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item label={`选择医生`}>
                  {getFieldDecorator(`doc`, {
                    rules: [
                      {
                        message: "请输入患者联系电话!"
                      }
                    ]
                  })(
                    <AutoComplete
                      dataSource={["aa", "bb", "cc"]}
                      onSearch={e => {
                        return ["aa", "bb"];
                      }}
                      onSelect={() => {
                        console.log("搜索");
                      }}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={18} />
            </Row>
            <Button type="primary" size="large" block htmlType="submit">
              完成挂号
            </Button>
          </FormRowBox>
        </ContentCom>
      </form>
    </React.Fragment>
  );
}
export default Form.create({ name: "reg" })(Reg);

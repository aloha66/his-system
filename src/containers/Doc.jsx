import React from "react";
import { Steps, Divider, Layout, Button } from "antd";
import OutpatientList from "../components/OutpatientList";

const { Content } = Layout;
const Step = Steps.Step;

function Doc() {
  return (
    <React.Fragment>
      <Content
        style={{
          margin: "24px 16px",
          padding: "5px 24px ",
          background: "#fff",
          minHeight: 280
        }}
      >
        <OutpatientList
          title={() => (
            <span>
              未诊病人 <Button type="primary">新增</Button>
            </span>
          )}
        />
      </Content>
      <Content
        style={{
          margin: "24px 16px",
          padding: "5px 24px ",
          background: "#fff",
          minHeight: 280
        }}
      >
        <OutpatientList title={() => <span>已诊病人 </span>} />
      </Content>
    </React.Fragment>
  );
}
export default Doc;

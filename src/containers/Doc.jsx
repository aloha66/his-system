import React from "react";
import { Steps, Divider, Layout } from "antd";
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
        <OutpatientList title={() => <h2>未诊病人 </h2>} />
      </Content>
      <Content
        style={{
          margin: "24px 16px",
          padding: "5px 24px ",
          background: "#fff",
          minHeight: 280
        }}
      >
        <OutpatientList title={() => <h2>已诊病人 </h2>} />
      </Content>
    </React.Fragment>
  );
}
export default Doc;

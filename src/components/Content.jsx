import React from "react";
import { Layout } from "antd";
function ContentCom({ children }) {
  return (
    <Layout.Content
      style={{
        margin: "24px 16px",
        padding: "5px 24px ",
        background: "#fff",
        minHeight: 280
      }}
    >
      {children}
    </Layout.Content>
  );
}
export default ContentCom;

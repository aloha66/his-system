import React from "react";
import { Layout } from "antd";
function ContentCom({ children }) {
  return (
    <Layout.Content
      style={{
        margin: "24px 16px",
        padding: "24px",
        background: "#fff",
        minHeight: 80
      }}
    >
      {children}
    </Layout.Content>
  );
}
export default ContentCom;

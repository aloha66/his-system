import React, { useState } from "react";
import { Steps, Divider, Layout, Button, Modal } from "antd";
import OutpatientList from "com/OutpatientList";
import EditPatient from "com/editPatient/EditPatientForm";

const { Content } = Layout;
const Step = Steps.Step;

function Doc() {
  let [editPatient, setEditPatient] = useState(false);
  return (
    <React.Fragment>
      <Modal
        title="新增患者"
        visible={editPatient}
        onOk={() => setEditPatient(false)}
        onCancel={() => setEditPatient(false)}
      >
        <EditPatient />
      </Modal>

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
              未诊病人{" "}
              <Button type="primary" onClick={() => setEditPatient(true)}>
                新增
              </Button>
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

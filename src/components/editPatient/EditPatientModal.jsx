import React, { useState, useRef } from "react";
import { Modal } from "antd";
import EditPatient from "com/editPatient/EditPatientForm";

function EditPatientModal(props) {
  let [show, setShow] = useState(false);
  let { btn, type = "add", ...other } = props;

  return (
    <React.Fragment>
      <Modal
        title={type == "edit" ? "编辑患者" : "新增患者"}
        visible={show}
        footer={null}
        onCancel={() => setShow(false)}
      >
        <EditPatient type={type} {...other} visible={show} />
      </Modal>
      {btn && btn(show, setShow)}
    </React.Fragment>
  );
}
export default EditPatientModal;

//看诊列表
import React from "react";
import { Table, Divider, Tag, Button } from "antd";
import EditPatientModal from "com/editPatient/EditPatientModal";
function sexText(sex) {
  switch (parseInt(sex)) {
    case 1:
      return "男";
    case 2:
      return "女";
    default:
      return "未知";
  }
}

function stateTag(state) {
  switch (parseInt(state)) {
    case 1:
      return <Tag key={state}>填写病历</Tag>;
    case 2:
      return <Tag key={state}>开方中</Tag>;
    case 3:
      return <Tag key={state}>已诊结</Tag>;
    case 4:
      return <Tag key={state}>抓药中</Tag>;
    case 0:
      return <Tag key={state}>已完成</Tag>;
    default:
      return "未知状态";
  }
}

const columns = [
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    render: state => <span>{stateTag(state)}</span>
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "联系电话",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "性别",
    key: "sex",
    dataIndex: "sex",
    render: sex => <a href="javascript:;">{sexText(sex)}</a>
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <span>
        <EditPatientModal
          source={record}
          type="edit"
          btn={(show, setShow) => (
            <Button style={{ marginLeft: 16 }} onClick={() => setShow(true)}>
              编辑
            </Button>
          )}
        />
        <Divider type="vertical" />
        <a href="javascript:;">删除</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    sex: 1,
    phone: "18702038282",
    state: 1
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    sex: 2,
    phone: "18702038282",
    state: 2
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    sex: 1,
    phone: "18702038282",
    state: 3
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    sex: 1,
    phone: "18702038282",
    state: 4
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    sex: 1,
    phone: "18702038282",
    state: 0
  }
];

function OutpatientList({ title }) {
  return <Table columns={columns} dataSource={data} title={title} />;
}
export default OutpatientList;

import React from "react";
import { Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";

function MenuCom(props) {
  console.log(props);
  let {
    history: { push },
    location: { pathname }
  } = props;
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
      <Menu.Item key="/" onClick={e => push("/")}>
        <Icon type="home" />
        <span>首页</span>
      </Menu.Item>
      <Menu.Item key="/doc" onClick={e => push("/doc")}>
        <Icon type="edit" />
        <span>门诊</span>
      </Menu.Item>
      <Menu.Item key="/record" onClick={e => push("/record")}>
        <Icon type="hdd" />
        <span>档案</span>
      </Menu.Item>
      <Menu.Item key="/pha" onClick={e => push("/pha")}>
        <Icon type="medicine-box" />
        <span>配发药</span>
      </Menu.Item>
    </Menu>
  );
}
export default withRouter(MenuCom);

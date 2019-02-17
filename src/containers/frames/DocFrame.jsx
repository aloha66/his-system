import React, { useState, useContext } from "react";
import { Layout, Menu, Icon } from "antd";
import { Switch, Route, withRouter } from "react-router-dom";
import "assets/frame.css";

import UserItem from "com/UserItem";
import Logo from "com/Logo";
import Home from 'con/Home';
import Doc from 'con/Doc';
import Pha from 'con/Pha';
import ContentCom from 'com/Content';
import EditPatient from 'com/editPatient/EditPatientForm'
const { Sider, Content } = Layout;


function MenuCom(props) {
  let {
    history: { push },
    location: { pathname }
  } = props;
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>

      <Menu.Item key="/" onClick={e => push("/")}>
        <Icon type="edit" />
        <span>门诊</span>
      </Menu.Item>
      <Menu.Item key="/record" onClick={e => push("/record")}>
        <Icon type="hdd" />
        <span>档案</span>
      </Menu.Item>
      <Menu.Item key="/pha" onClick={e => push("/pha")}>
        <Icon type="medicine-box" />
        <span>设置</span>
      </Menu.Item>
    </Menu>
  );
}
MenuCom = withRouter(MenuCom)


function Routers() {
  return <Switch>
    <Route exact path="/" component={Doc} />
    <Route path="/pha" component={Pha} />
    <Route
      path="/edit_patient"
      component={() => (
        <ContentCom>
          <EditPatient />
        </ContentCom>
      )}
    />
  </Switch>
}

function Frame(props) {
  // 菜单折叠
  let [collapsed, setCollapsed] = useState(true);
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Logo collapsed={collapsed} />
        <MenuCom />
        <UserItem />
      </Sider>
      <Layout>
        <Content>
          <Routers />
        </Content>
      </Layout>
    </Layout>
  );
}



export default Frame;


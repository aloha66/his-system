import React, { useState } from "react";
import { Layout } from "antd";
import MenuCom from "../components/Menu";
import { Link, Switch, Route } from "react-router-dom";
import "../assets/frame.css";
import Home from "./Home";
import Doc from "./Doc";
import Pha from "./Pha";
import EditPatient from "../components/editPatient/EditPatientForm";
import ContentCom from "../components/Content";
const { Sider, Content } = Layout;

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
      </Sider>
      <Layout>
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/doc" component={Doc} />
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
        </Content>
      </Layout>
    </Layout>
  );
}

function Logo({ collapsed }) {
  return (
    <Link className="logo" to="/">
      {collapsed ? (
        <React.Fragment>
          <span>H</span>
          <span>I</span>
          <span>S</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span>H</span>
          <span>I</span>
          <span>S</span>
          <span>系</span>
          <span>统</span>
        </React.Fragment>
      )}
    </Link>
  );
}

export default Frame;

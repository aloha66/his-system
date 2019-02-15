import React, { useState, useContext, useEffect } from "react";
import { Layout } from "antd";
import MenuCom from "com/Menu";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import "assets/frame.css";
import Home from "con/Home";
import Doc from "con/Doc";
import Pha from "con/Pha";
import Login from "con/Login";
import EditPatient from "com/editPatient/EditPatientForm";
import ContentCom from "com/Content.jsx";
import { UserContext } from "tools/User";
import UserItem from "com/UserItem";
const { Sider, Content } = Layout;

function Frame(props) {
  // 菜单折叠
  let [collapsed, setCollapsed] = useState(true);
  // 登录授权
  let { auth } = useContext(UserContext);
  if (!auth.user) return <Redirect to="/login" />;
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

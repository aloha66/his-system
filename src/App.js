import React from "react";
import { hot } from "react-hot-loader/root";
import Frame from "con/Frame";
import Login from "con/Login";
import { Switch, Route } from "react-router-dom";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { LocaleProvider } from "antd";
import { UserProvider } from "tools/User";

function App(props) {
  return (
    <LocaleProvider locale={zhCN}>
      <UserProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Frame} />
        </Switch>
      </UserProvider>
    </LocaleProvider>
  );
}

function NoMatch() {
  return "未找到页面";
}

export default hot(App);

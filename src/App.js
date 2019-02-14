import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import Frame from "./containers/Frame";
import Login from "./containers/Login";
import { Switch, Route } from "react-router-dom";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { LocaleProvider } from "antd";
import { UserContext } from "./hooks/User";

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <UserContext.Provider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Frame} />
          </Switch>
        </UserContext.Provider>
      </LocaleProvider>
    );
  }
}

function NoMatch() {
  return "未找到页面";
}

export default hot(App);

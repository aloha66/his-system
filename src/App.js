import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import Frame from "./containers/Frame";
import { Switch, Route } from "react-router-dom";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { LocaleProvider } from "antd";

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Switch>
          <Route path="/" component={Frame} />
        </Switch>
      </LocaleProvider>
    );
  }
}

function NoMatch() {
  return "未找到页面";
}

export default hot(App);

import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import Frame from "./containers/Frame";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Frame} />
      </Switch>
    );
  }
}

function NoMatch() {
  return "未找到页面";
}

export default hot(App);

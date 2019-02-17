import React from "react";
import { AutoComplete } from "antd";

class AutoCompleteCom extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value]
    });
  };

  render() {
    const { dataSource } = this.state;
    console.log(this.props);
    return (
      <AutoComplete
        dataSource={dataSource}
        onSearch={this.handleSearch}
        {...this.props}
      />
    );
  }
}

export default AutoCompleteCom;

const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins
} = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = override(
  ...addBabelPlugins("react-hot-loader/babel"),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);

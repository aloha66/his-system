const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");
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
    modifyVars: {
      "@primary-color": "#1DA57A"
    }
  }),
  addWebpackAlias({
    pub_: path.resolve(__dirname, "src/tools/public.js"),
    com: path.resolve(__dirname, "src/components"),
    con: path.resolve(__dirname, "src/containers"),
    hooks: path.resolve(__dirname, "src/hooks"),
    tools: path.resolve(__dirname, "src/tools"),
    assets: path.resolve(__dirname, "src/assets"),
    config_: path.resolve(__dirname, "src/tools/config.js"),
  })
);
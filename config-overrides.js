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
    modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addWebpackAlias({
    hPub_: path.resolve(__dirname, "src/hooks/public.js"),
    com: path.resolve(__dirname, "src/components"),
    con: path.resolve(__dirname, "src/containers"),
    hooks: path.resolve(__dirname, "src/hooks"),
    assets: path.resolve(__dirname, "src/assets")
  })
);

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [],
  },
  plugins: [new HtmlWebpackPlugin({
      title: "Webpack",
      template: "./src/index.html"
  })],
  devServer: {
      port: 5000,
      open: true,
      static: {
          directory: path.resolve(__dirname, "dist")
      }
  },
  mode: "development",
};

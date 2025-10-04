const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
        {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
      title: "Webpack",
      template: "./src/index.html"
  })
  ],
  devServer: {
      port: 5000,
      open: true,
      static: {
          directory: path.resolve(__dirname, "dist")
      }
  },
    mode: "none"
};

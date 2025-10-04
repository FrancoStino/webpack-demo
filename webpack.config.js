const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:   "./src/index.js",
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
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: {
                loader:  "img-optimize-loader",
                options: {
                    compress: {
                        mode:              "lossless",
                        quality:           10,
                        speed:             1,
                        lossy:             0,
                        progressive:       true,
                        interlaced:        false,
                        strip:             true,
                        max:               80,
                        min:               60,
                        dither:            false,
                        alpha:             false,
                        optimizationLevel: 3,
                        palette:           false,
                        colorspace:        "srgb",

                    }
                }
            }
        }
    ],
  },
    plugins: [
        new HtmlWebpackPlugin ( {
            title: "Webpack",
        } )
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

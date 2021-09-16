const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  const isProduction = env.production;
 
  return {
    entry: {
      main: ["core-js/stable", "regenerator-runtime/runtime", "./src/app.js"],
    },
    output: {
      path: path.resolve(__dirname, "public_html", "dist"),
      filename: "[name]-bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader, 
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }, 
            {
              loader: "sass-loader", 
              options: {
                sourceMap: true
              }
            }
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({filename: 'styles.css'})],
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "public_html"),
          watch: true,
          publicPath: "/",
        },
        {
          directory: path.join(__dirname, "public_html", "dist"),
          watch: true,
          publicPath: "/dist/",
        },
      ],
      historyApiFallback: true,
      compress: true,
      port: 8080,
      hot: true,
    },
    devtool: isProduction ? "source-map" : "inline-cheap-module-source-map",
  }
};

const path = require("path");
const { ModuleFilenameHelpers } = require("webpack");

module.exports = (env) => {
  const isProduction = env.production;
  
  return {
    entry: {
      main: ["core-js/stable", "regenerator-runtime/runtime", "./src/app.js"],
    },
    output: {
      path: path.resolve(__dirname, "public_html/"),
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
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public_html/"),
        watch: true,
        publicPath: "/",
      },
      historyApiFallback: true,
      compress: true,
      port: 8080,
      hot: true,
    },
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
  }
};

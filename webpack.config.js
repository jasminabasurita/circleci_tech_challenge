const isDev = process.env.NODE_ENV === "development"
const path = require("path")

//
//Plugins
const LiveReloadPlugin = require("webpack-livereload-plugin")

module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: isDev ? [new LiveReloadPlugin({ appendScriptTag: true })] : [],
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  }
}

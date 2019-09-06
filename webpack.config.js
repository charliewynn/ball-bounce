const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  watch: false,
  devtool: "source-map",
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      inject: "body"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"), // output directory
    filename: "[name].js" // name of the generated bundle
  }
};

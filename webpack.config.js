const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/cli.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  target: "node",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ],
  output: {
    filename: "cli.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
};

const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: { filename: "bundle.js", path: path.resolve(__dirname, "./dist") },
  mode: "none",
  publicPath: path.resolve(__dirname, "./dist"),
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/inline",
      },
    ],
  },
};

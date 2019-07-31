const path = require("path");
module.exports = {
  outputDir: "dell",
  configureWebpack: {
    devServer: {
      contentBase: path.resolve(__dirname, "static")
    }
  }
};

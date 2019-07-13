const path = require('path');
// npx webpack --config webpack.config11.js 指定配置文件打包
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.jpeg$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

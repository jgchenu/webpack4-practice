const path = require('path');
// npx webpack --config webpack.config11.js 指定配置文件打包
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

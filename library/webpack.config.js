const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    library: './src/index.js'
  },
  externals: ['lodash'], // 忽略lodash的打包
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd', //支持通用的引入 import require
    library: 'root' // 暴露全局变量
  }
};

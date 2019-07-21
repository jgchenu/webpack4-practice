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
    libraryTarget: 'umd',
    library: 'root'
  }
};

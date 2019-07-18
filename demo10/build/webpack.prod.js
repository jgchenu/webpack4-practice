const merge =  require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool:'cheap-module-source-map', //prod 环境用cheap-module-source-map,dev 环境用cheap-module-eval-source-map
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
  //其实开发环境并不需要dist，因为编译后的dist文件缓存在内存里，这样更快。
};

module.exports = merge(commonConfig,prodConfig);

const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const clientConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', //prod 环境用cheap-module-source-map,dev 环境用cheap-module-eval-source-map
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true
    // hotOnly: true, //使用为true的时候，js发生改变不发生刷新页面，但是module.hot.accept监听文件是否改变从而触发回调函数
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    usedExports: true //production 的时候，optimization就已经配置好了，不用自己去配置
  }
};

module.exports = merge(commonConfig, clientConfig);

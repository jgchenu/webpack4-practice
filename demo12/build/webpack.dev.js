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
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(commonConfig, clientConfig);

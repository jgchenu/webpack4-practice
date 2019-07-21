const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// npx webpack --config webpack.config11.js 指定配置文件打包

// presets: [
//   [
//     '@babel/preset-env',
//     {
//       targets: {
//         chrome: '67'
//       },
//       useBuiltIns: 'usage'
//     }
//   ]
// ]
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  devtool:'cheap-module-eval-source-map', //prod 环境用cheap-module-source-map,dev 环境用cheap-module-eval-source-map
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 204800
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        }
      },
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true //production 的时候，optimization就已经配置好了，不用自己去配置
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

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
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    historyApiFallback:true,
    // historyApiFallback:{
    //   rewrites:[{
    //     from:/\.*/,
    //     to:'index.html'
    //   }]
    // },
    proxy: {
      '/react/api': {
        target: 'http://www.dell-lee.com',
        pathRewrite: {
          'header.json': 'demo.json'
        },
        secure: false ,//关闭对于https请求安全的限制
        changeOrigin: true, //改变origin请求头
        header: { //改变请求头
          host: 'www.dell-lee.com'
        }
      }
    }
    // hotOnly: true, //使用为true的时候，js发生改变不发生刷新页面，但是module.hot.accept监听文件是否改变从而触发回调函数
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:['babel-loader','eslint-loader']
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
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

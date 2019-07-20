const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js'
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
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [path.join(process.cwd(), '../dist/**/*')]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  optimization: {
    splitChunks: { // 默认配置
      chunks: 'async', // all 是分割全部， async 是分割异步代码
      minSize: 30000, // 满足比这个值才分割
      minChunks: 1,// 在项目中被引入次数才进行分割
      maxAsyncRequests: 5, // 最多的异步分割只有五个
      maxInitialRequests: 3, // 首页最多的分割只有3个
      automaticNameDelimiter: '~', // 分割打包文件名用～链接 例如vendors~lodash.js
      name: true, // 根据entry的key 名字 + cacheGroups 满足条件的key name
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 分割满足条件
          priority: -10,// 生效权重
          // filename:'vendor.js' //打包输出文件名
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true // 看是否有重复引用，保留一份就可以
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename:'[name].chunk.js'
  }
};

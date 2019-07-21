const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// npm node webpack 版本够新
// 使用尽可能少不必要的loader
// 如果不是必要，不要进行代码压缩等操作，如开发环境就没必要代码压缩
module.exports = {
  entry: {
    main: './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // mainFiles: ['index'] // 引入文件夹会默认查找的文件，这个是默认配置项
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'), // 只对src目录下文件进行解析编译
        // exclude:/node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
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
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: false
};

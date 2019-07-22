const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
// npm node webpack 版本够新
// 使用尽可能少不必要的loader
// 如果不是必要，不要进行代码压缩等操作，如开发环境就没必要代码压缩

const plugins = [
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: [path.join(process.cwd(), '../dist/**/*')]
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  })
];

const files = fs.readdirSync(path.resolve(__dirname, '../dll/'));
files.forEach(file => {
  if (/.*\.dll\.js/.test(file)) {
    plugins.push(
      new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, '../dll', file)
      })
    );
  }
  if (/.*\.manifest\.json/.test(file)) {
    plugins.push(
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../dll', file)
      })
    );
  }
});
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
  plugins,
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          priority: -10,
          name: 'vendor'
        }
      }
    }
  },
  performance: false
};

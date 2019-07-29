const path = require('path');
const CopyrightPlugin = require('./plugins/copyright-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new CopyrightPlugin({
      name: 'foo'
    })
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  }
};

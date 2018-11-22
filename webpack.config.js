const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title : 'Micro Framework',
      template : './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
};
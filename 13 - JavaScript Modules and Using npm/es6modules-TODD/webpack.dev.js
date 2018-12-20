// webpack v4
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = {
  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './app.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8081
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
  ]
};

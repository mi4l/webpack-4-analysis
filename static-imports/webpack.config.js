const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [new HTMLWebpackPlugin({
    template: './src/index.template.html',
    title: 'Static Imports' })
  ]
};
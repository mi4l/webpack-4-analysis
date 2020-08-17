const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    plugins: [new HTMLWebpackPlugin(), new webpack.ProgressPlugin()]
};
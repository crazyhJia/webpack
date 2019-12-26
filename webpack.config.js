/**
 *@author     黄佳
 *@date       2019/12/13  16:09
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    optimization: {
           usedExports: true
 },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
   },
    module: {
             rules: [
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
       }
     ]
   },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '模块热替换',
            // filename: 'test.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // filename: 'main.js',
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
};

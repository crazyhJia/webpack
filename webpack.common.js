/**
 *@author     黄佳
 *@date       2019/12/24  16:28
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: {
         app: './src/index.js'
       },
   plugins: [
         new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
               title: 'Production'
     })
   ],
   output: {
         filename: '[name].bundle.js',
             path: path.resolve(__dirname, 'dist')
       }
 };

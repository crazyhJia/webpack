/**
 *@author     黄佳
 *@date       2019/12/24  16:28
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

     module.exports = merge(common, {
       mode: 'development',
       devtool: 'inline-source-map',
       devServer: {
         contentBase: './dist'
       }
 });

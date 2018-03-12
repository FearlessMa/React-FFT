/**
 * Created by MHC on 2018/2/12.
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// const path = require('path');

module.exports = merge(common,{
    devServer: {
        hot: true,
        historyApiFallback: true,
        overlay: true,
        open: false,
        port: 8090
        // contentBase: path.resolve(__dirname,'../assets'),
        // publicPath: "http://localhost:8090"
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

});
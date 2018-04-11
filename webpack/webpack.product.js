/**
 * Created by MHC on 2018/2/13.
 */
// const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


module.exports = merge(common,{
    plugins : [
        new UglifyJSWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

    ]
});

console.log("process.env.NODE_ENV 的值是(webpack.product.js)："+ process.env.NODE_ENV)

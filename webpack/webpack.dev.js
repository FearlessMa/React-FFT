/**
 * Created by MHC on 2018/2/12.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    //reactDevTools 可在浏览器中调试
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        overlay: true,
        open: false,
        port: 8090,
        // inline: true
        // contentBase: path.resolve(__dirname,'../assets'),
        // publicPath: "http://localhost:8090"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include: [path.resolve(__dirname, '../src')], // 指定检查的目录
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ]

});
console.log("process.env.NODE_ENV 的值是(webpack.dev.js)：" + process.env.NODE_ENV)

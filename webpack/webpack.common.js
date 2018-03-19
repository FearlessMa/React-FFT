/**
 * Created by MHC on 2018/2/12.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry :
        ['babel-polyfill', 'react-hot-loader/patch', path.join(__dirname,'../src/index.js')]
    ,
    output : {
        filename : 'js/[name].[hash].js',
        path : path.resolve(__dirname,'../dist')
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : [['env'],['react'],['stage-0']],
                            plugins : [
                                'transform-decorators-legacy',
                                "transform-remove-strict-mode",
                                "react-hot-loader/babel",
                                ["import", { libraryName: "antd", style: "css" }]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include: [path.resolve(__dirname, '../src')], // 指定检查的目录
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            {
                test : /\.(css)$/,
                loader : ['style-loader', 'css-loader']
            },
            {
                test : /\.(less)$/,
                loader : ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test:/\.(png|gif|jpg|jpeg|svg)$/,
                include:[
                    path.resolve(__dirname,'../img')
                ],
                loader:'file-loader',
                options:{
                    name:'img/[name].[ext]'
                }
            },
        ]
    },
    resolve : {
        alias : {
            src : path.resolve(__dirname,'../src'),
            css : path.resolve(__dirname,'../css'),
            img : path.resolve(__dirname,'../img')

        },
        extensions : [ '*', '.js', '.css', '.less', '.scss']
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react all',
            template : path.resolve(__dirname,'../index.html')
        }),
        new ExtractTextPlugin("../dist/css/[name].css"),
        new CleanWebpackPlugin(['../dist'])
    ]
};
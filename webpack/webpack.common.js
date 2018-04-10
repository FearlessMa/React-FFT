/**
 * Created by MHC on 2018/2/12.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

let entryIndex = '';
if (process.env.NODE_ENV === "production"){
     entryIndex = path.join(__dirname, '../src/index.js');
}
if(process.env.NODE_ENV === "development"){
     entryIndex = [ 'react-hot-loader/patch',path.join(__dirname, '../src/index.js')];
}


module.exports = {
    entry:entryIndex,
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['env'], ['react'], ['stage-0']],
                            plugins: [
                                'transform-decorators-legacy',
                                "transform-remove-strict-mode",
                                "react-hot-loader/babel",
                                ["import", {libraryName: "antd", style: true}],
                                //"transform-runtime"与'babel-polyfill'一样
                                [
                                    "transform-runtime",
                                    {
                                        "helpers": false,
                                        "polyfill": false,
                                        "regenerator": true,
                                        "moduleName": "babel-runtime"
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                loader: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.(less)$/,
            //     loader: ['style-loader', 'css-loader', 'less-loader']
            // },
            {
                test: /\.(less)$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader',options: { javascriptEnabled: true }},
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                include: [
                    path.resolve(__dirname, '../img')
                ],
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                include:[
                    path.resolve(__dirname,'../node_modules/antd')
                ],
                loader:'file-loader',
                options:{
                    name:'fonts/iconfont/[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
            css: path.resolve(__dirname, '../css'),
            img: path.resolve(__dirname, '../img'),
            common: path.resolve(__dirname,'../src/common')
        },
        extensions: ['*', '.js', '.css', '.less', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react all',
            template: path.resolve(__dirname, '../index.html')
        }),
        // new ExtractTextPlugin("../dist/css/[name].css"),
        new CleanWebpackPlugin(['../dist'])
    ]
};


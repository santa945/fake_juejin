const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //入口
    entry: {
        main: './src/main.js'
    },
    //出口
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[hash:8].js'
    },
    //服务器
    devServer: {
        contentBase: path.join(__dirname, './src'),
        port: 2101,
        proxy: {
            '/api': {
                target: 'http://localhost:10086',
                changeOrigin: true
            }
        }
    },
    // 加载器
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: path.resolve(__dirname, './node_modules'),//排除node_modules目录
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env'],
                        plugins: [
                            '@babel/proposal-class-properties',
                            "@babel/plugin-transform-runtime",
                            ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(?:jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,//iconfont字体图标使用file-loader加载器
                loader: ['file-loader']
            }
        ]
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/template.html',
            hash: true,
            title: '首页'
        }),
        new CleanWebpackPlugin()
    ]
}
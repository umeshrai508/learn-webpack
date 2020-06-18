const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'index.html', 
        port: '9000'
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            use: ['file-loader'],
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                // MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                // MiniCssExtractPlugin.loader,
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                    plugins: ['transform-class-properties']
                }

            }
        }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: 'styles.[contenthash].css'
        // }), 
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({
            title: "Hello Webpack!", 
            meta: {
                description: "some description"
            }
        }),
    ]
}
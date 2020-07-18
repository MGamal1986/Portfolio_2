const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/js/app.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        stats: 'errors-only' // show errors only in compiling 
    },
    plugins:[ 
        // used to add jquery plugin in webpack
        new webpack.ProvidePlugin({ 
            $: 'jquery', 
            jQuery: 'jquery'
          }),
        // this plugin to extract css file from bundle.js file and make it stand alone file
        new MiniCssExtractPlugin({ 
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss: [autoprefixer()]
            }
        })
    ],
    module:{
        rules:[
            // fonts loader
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        name:'fonts/[name].[ext]',
                    }
                }
                
            },
            // html loader
            {
                test: /\.html$/,
                use:['html-loader']
            },
            // file loader
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        name: 'img/[name].[ext]'
                    }
                }
            },
            // sass module
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'postcss-loader',
                    'sass-loader']
            },
            // css module
            {
                test : /\.css$/,
                use:[{
                    loader: MiniCssExtractPlugin.loader,
                },'css-loader','postcss-loader']
            },
            // babel loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
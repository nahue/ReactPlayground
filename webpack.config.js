/*global require, module, __dirname*/
var path = require('path'); // eslint-disable-line no-unused-vars
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var production = process.env.NODE_ENV === 'production';


var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('./dist/common.js');

const sassLoaders = [
    'css-loader',
    //'autoprefixer-loader?browsers=last 2 version",
    'sass-loader' //&includePaths[]=' //+ path.resolve(__dirname, './src') + '&' +
    //'includePaths[]=' + path.resolve(__dirname, 'node_modules/material-design-lite/src')

];

module.exports = {
    entry: {
        App: './src/App.js',
        vendor: ['jquery', 'react', 'reflux', 'react-router']
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint',
            exclude: /(node_modules|bower_components)/
        }],
        loaders: [
            {
                test: /\.css$/,
                //loader: 'style!css?importLoaders=1!postcss'
                loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
            },{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', sassLoaders.join('!')),
                include: [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, 'node_modules/material-design-lite/src')
                ]
            },{
                test: /\.less$/,
                loader: 'style!css!less'
            },{
                test: /(webfont|)\.(otf|eot|svg|ttf|woff|woff2)(\?.+|)$/,
                loader: 'url-loader?limit=8192'
            },{
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=dist/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },{
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }]
    },
    plugins: [
        commonsPlugin,
        new ExtractTextPlugin('./dist/styles.css')
    ],
    eslint: {
        configFile: './.eslintrc'
    }
};

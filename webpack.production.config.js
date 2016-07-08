var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pathToJquery = path.resolve(node_modules_dir, 'jquery/dist/jquery.min.js');

var pkg = '';  //prefix of the file

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),
        commons: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //dist path
        filename: pkg+'[name].[hash:8].js'      // file name
    },
    resolve: {
        alias: {
            'jquery': path.resolve(node_modules_dir, 'jquery/dist/jquery.min.js'), 
        }
    },
    module: {
        loaders: [ //some loaders
            {test: /\.jsx?$/,exclude: [node_modules_dir],loader: 'babel'},
            {test: /\.(jpg|png|gif)$/, loader: "url?limit=2048&name=[path][name].[hash:8].[ext]"},
            {test: /\.scss/,loader: ExtractTextPlugin.extract('css!sass')},
            { test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=/fonts/[name].[ext]'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commons', pkg+'commons.[hash:8].js'),  //union common reactJS
        new ExtractTextPlugin(pkg+'all.[hash:8].css', {allChunks: true}),
        new webpack.optimize.DedupePlugin(),  //find some module 
        new webpack.optimize.UglifyJsPlugin(),  //ugliy js
        new webpack.optimize.OccurenceOrderPlugin(),  // sort js by quote
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', //dist html name
            template: 'build/index_production.html', //template inject
            inject: 'body'
        })
    ],

    noParse: [pathToJquery]  //ignore juqery
};

module.exports = config;


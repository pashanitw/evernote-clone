"use strict"
var path = require('path');
var webpack = require('webpack');

module.exports = {
    
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    debug:true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query:
                  {
                    presets:['react','es2015','stage-1']
                  }
            },
            {
                test: /\.s?css$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
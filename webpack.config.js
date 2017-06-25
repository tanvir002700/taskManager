var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.svg$/, use: 'svg-inline-loader?classPrefix' }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};
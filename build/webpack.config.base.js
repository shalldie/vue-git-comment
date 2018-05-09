const path = require('path');
const webpack = require('webpack');

module.exports = {

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            }
        ]
    }

};

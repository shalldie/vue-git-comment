const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
    mode: 'development',

    devtool: 'inline-source-map',

    entry: {
        index: [path.join(__dirname, '../src/index.js')]
        // 'git-comment': [path.join(__dirname, '../src/git-comment.js')]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});

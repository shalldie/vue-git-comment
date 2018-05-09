const path = require('path');
const webpackConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
    mode: 'production',

    entry: {
        'git-comment': [path.join(__dirname, '../src/git-comment.js')]
    },

    output: {
        library: 'gitComment',
        libraryTarget: 'umd',
        libraryExport: 'default'
    }

});

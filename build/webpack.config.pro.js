const path = require('path');
const webpackConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

webpackConfig.module.rules.forEach(item => {
    if (item.use[0] === 'style-loader') {
        item.use[0] = MiniCssExtractPlugin.loader;
    }
});

module.exports = merge(webpackConfig, {
    mode: 'production',

    entry: {
        'git-comment': [path.join(__dirname, '../src/git-comment.js')]
    },

    output: {
        library: 'gitComment',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css"
            // chunkFilename: "[id].css"
        })
    ]

});

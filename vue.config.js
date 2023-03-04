// eslint-disable-next-line
const path = require('path');

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,

    devServer: {
        port: 8752
    },

    css: {
        extract: false,
        loaderOptions: {
            scss: {
                additionalData:
                    [
                        // variablees
                        '@import "~@/assets/styles/variables.scss"',
                        // mixin
                        '@import "~@/assets/styles/mixin.scss"'
                    ].join(';') + ';'
            }
        }
    },

    configureWebpack: {
        output: {
            library: 'VueGitComment',
            libraryExport: 'default'
        }
    },

    chainWebpack: config => {
        config.resolve.alias.set('~', path.join(__dirname, 'src'));
    }
};

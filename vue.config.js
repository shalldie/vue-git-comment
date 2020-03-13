module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        output: {
            library: 'VueGitComment',
            libraryExport: 'default'
        }
    },
    devServer: {
        port: 8752
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/styles/mixin.scss";`
            }
        }
    }
};
module.exports = {
    devServer: {
        proxy: {
            "/data": {
                target: "http://192.168.200.87:xxx",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/data": "",
                },
            },
            '/wdfn': {
                target: 'http://map.xxx.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/wdfn': '/editor/fmap',
                },
            },
            "/serve": {
                target: "http://192.168.200.87:xxx",
                changeOrigin: true,
                pathRewrite: {
                    "^/serve": "",
                },
            },
        },
        // 关闭esline
        overlay: {
            warnings: false,
            errors: false,
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg")
        svgRule.uses.clear()
        svgRule
            .use("babel-loader")
            .loader("babel-loader")
            .end()
            .use("vue-svg-loader")
            .loader("vue-svg-loader")
    },
    lintOnSave: false,
    publicPath: "/wandaBmGuide",
    // 打包名称
    outputDir: 'wandaBmGuide',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',
}

// https://cli.vuejs.org/zh/guide/webpack.html
// https://cli.vuejs.org/zh/config/#vue-config-js
// vue.config.js 是一个可选的配置文件，
// 如果项目的 (和 package.json 同级的) 根目录中存在这个文件，
// 那么它会被 @vue/cli-service 自动加载。
// 你也可以使用 package.json 中的 vue 字段，
// 但是注意这种写法需要你严格遵照 JSON 的格式来写。

// bootstrap && jquery
const webpack = require('webpack')

module.exports = {

    // build不生成.map文件
    // productionSourceMap: false,

    // API_BASEURL: process.env.NODE_ENV === 'production'
    //     ? 'http://api.p2p.lzz.io/'
    //     : '/api/',

    // 从 Vue CLI 3.3 起已弃用，请使用publicPath。
    // baseUrl指vue应用本身的部署的根目录
    // baseUrl: process.env.NODE_ENV === 'production'
    //     ? 'http://p2p.lzz.io/'
    //     : '/',
    // publicPath: '/', // Default: '/'
    // publicPath: process.env.NODE_ENV === 'production'
    //         ? '/production-sub-path/'
    //         : '/',

    // configureWebpack: config => {
    //   if (process.env.NODE_ENV === 'production') {
    //     // 为生产环境修改配置...
    //   } else {
    //     // 为开发环境修改配置...
    //   }
    // }
    // bootstrap && jquery
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    },

    devServer: {
        port: 80, //default 8080
        // open: true,//打开浏览器
        open: 'Google Chrome',
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,  // 设置这个参数可以避免跨域
            }
        }
    },

}

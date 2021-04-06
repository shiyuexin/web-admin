const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'plugins': '@/plugins',
            }
        }
    },
    devServer: {
        proxy: {
            '/activity-external-api': {
                target: 'http://activity-platform.tvmore.com.cn', // 服务器端接口地址
                ws: false, //如果要代理 websockets，配置这个参数
                changeOrigin: true, //是否跨域
                // pathRewrite: {
                //     '^/api': '/api'
                // }
            }
        }

    },
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, 'src/assets/css/base.less')] // less所在文件路径
        }
    }
}
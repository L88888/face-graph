const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    // 打包时不生成.map文件
    productionSourceMap:false,
    //关闭eslint
    lintOnSave: false,
    //设置公共环境
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    chainWebpack: config => {
        config.resolve.alias
          .set('@', resolve('src'));
    },
    // pluginOptions: {
    //     'style-resources-loader': {
    //         preProcessor: 'less',
    //         patterns: [
    //             //path.resolve(__dirname, './public/skin/variable.less')
    //         ]
    //     }
    // },
    
    // css: {
    //     loaderOptions: {
    //         less: {
    //           modifyVars: {
    //                 // "@frameBackgroundColor":"#333",
    //                 // "@frameTextColorDefault":"#fff"
    //           },
    //           javascriptEnabled: true
    //         }
    //       }
    // }
}
/*
 * @Desc:
 * @Author: cbuc
 * @Date: 2021-08-15 16:20:34
 */
module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8086/', // 本地后端地址
        // target: 'http://106.15.179.105:3000/', // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  productionSourceMap: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [],
    },
  },
}

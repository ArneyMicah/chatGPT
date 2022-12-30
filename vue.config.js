const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',   //本地
    port: 8080,    //端口号
    open: true   //默认false   true自动打开
  },
})
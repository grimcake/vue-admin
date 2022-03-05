'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 部署应用包时的基本url
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  devServer: {
    port: 8082,
    // 启动完成打开浏览器
    open: true,
    // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
    overlay: {
      // 只显示错误信息
      errors: true,
      warnings: false,
    }
  },
  // 将配置合并到webpack中
  configureWebpack: {
    // 解析
    resolve: {
      // 创建 import 或 require 的别名，来确保模块引入变得更简单
      alias: {
        '@': resolve('src')
      }
    }
  },
  
}
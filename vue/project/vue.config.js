const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false //파일 이름이 두글자 이상아닐때 충돌나는거 대비
})

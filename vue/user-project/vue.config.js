const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000' //origin

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : { //개발하는 동안 사용되는 서버
    port : 8080,
    proxy : {//어떤경우에 origin을 대체할건지 써주면 됨
      '^/':{ //이경로로 시작하는 오리진이라는뜻
        target,
        changeOrigin : true //얘가 트루여야 위경로로 시작하는 오리진을 바꿔줌
      }
    }
  }
})

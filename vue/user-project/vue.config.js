const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000' //origin

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer : { //개발하는 동안 사용되는 서버
    port : 8080,
    proxy : {//어떤경우에 origin을 대체할건지 써주면 됨
      '^/api':{ //이경로로 시작하는 오리진이라는뜻 /가 절대경로라 api 쓰고 싶일때 사용할 기능을 붙어줘야 함
        target,
        changeOrigin : true, //얘가 트루여야 위경로로 시작하는 오리진을 바꿔줌
        ws:false, //websocket기능 안쓰겠다 지정/ websocket 채팅 등 실시간으로 해줄때 사용
        pathRewrite : {'^/api':'/'} //앞에가 내가 쓸 거 뒤에거 바꿀거 정규표현식기반으로
      }
    }
  }
})

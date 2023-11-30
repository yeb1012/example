import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //라우터 설치 한 후 생김 최상위 컴포넌트 따로있고 라우터에서 페이지 변경을 관리함 라우터쪽에 컴퍼넌트관리하면 됨

createApp(App).use(router).mount('#app')

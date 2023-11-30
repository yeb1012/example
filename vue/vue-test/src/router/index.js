import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [ //이걸 필요한만큼 추가
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') //주석처리 지연이라서 필요할때 불러오겠다는 말  webpackChunkName : 특수 주석 문법임
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes //라우팅목록
})

export default router

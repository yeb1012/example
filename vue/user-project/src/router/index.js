import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/userList.vue'

const routes = [
  {
    path: '/',
    name: 'userList',
    component: UserList
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

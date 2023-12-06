import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../App.vue/'
import EmpList from '../viewse/EmpList.vue'
import EmpInfo from '../views/EmpInfo.vue'
import EmpInsert from '../views/EmpInsert.vue'
import EmpUpdate from '../views/EmpUpdate.vue'

  
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
    {
      path: '/EmpList',
      name: 'empList',
      component: EmpList
    },
    ,
  
    {
      path: '/EmpInfo',
      name: 'empInfo',
      component: EmpInfo
    }
    ,
  
    {
      path: '/EmpInsert',
      name: 'empInsert',
      component: EmpInsert
    }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

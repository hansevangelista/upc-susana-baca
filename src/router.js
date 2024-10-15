import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Interprete from './components/Interprete.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/interprete', component: Interprete },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
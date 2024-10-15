import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Interprete from './components/Interprete.vue'
import Intro from './components/Intro.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/interprete', component: Interprete },
  { path: '/intro', component: Intro },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
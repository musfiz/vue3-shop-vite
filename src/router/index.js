import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/frontend/Homepage.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { path: '/women-category', name: 'About', component: About },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router

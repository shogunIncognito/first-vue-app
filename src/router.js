import { createRouter, createWebHashHistory } from "vue-router"
import Index from './pages/Index.vue'
import AboutMe from './pages/AboutMe.vue'
import Mandatos from './pages/Mandatos.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: AboutMe },
  { path: '/mandatos', component: Mandatos }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router

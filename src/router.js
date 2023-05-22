import { createRouter, createWebHistory } from "vue-router"
import Index from './pages/Index.vue'
import AboutMe from './pages/AboutMe.vue'
import Mandatos from './pages/Mandatos.vue'
import Test from './pages/Test.vue'
import NotFoundView from './pages/NotFoundView.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: AboutMe },
  { path: '/mandatos', component: Mandatos },
  { path: '/test/:text', component: Test },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router

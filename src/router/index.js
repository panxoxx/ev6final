import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Cartelera from '@/views/Cartelera.vue'
import Juego from '@/views/Juego.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/cartelera',
    component: Cartelera,
    
  },
  {
  path: '/cartelera/:id',
  component: Juego,
  },
  
  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

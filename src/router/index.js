import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Catalogo from '@/views/Catalogo.vue'
import Juego from '@/views/Juego.vue'
import NotFound from '@/views/NotFound.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Catalogo',
    component: Catalogo,
    alias: ['/carteleras','/games','/juego','/juegos','/game']
    
  },
  {
  path: '/Catalogo/:id',
  component: Juego
  },

  {
    path: '*',
    component:NotFound
    },
   
  {
    path: '/contacto',
    name: 'Contacto',
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '@/views/Inicio.vue'
import Chat from '@/views/Chat.vue'
import {showMessage} from '../helpers/showMessage'
import { auth } from '@/main'
import { onAuthStateChanged } from 'firebase/auth'

const routes: Array<RouteRecordRaw> = [
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio,
    meta:{
      requiresAuth: true, 
    }
  },

  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    meta:{
      requiresAuth: true, 
    }
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const obtenerUsuario = () =>{
  return new Promise((resolve, reject) =>{
    const removerEscucha = onAuthStateChanged(
      auth,
      (user) =>{
          removerEscucha();
          resolve(user);
      },

      reject
    )
  })
}

router.beforeEach(async (to, from, next) =>{
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await obtenerUsuario()){
      next();
    }else{
      showMessage("Acceso Denegado", "error")
      next("/");
    }
  }else{
    next();
  }
});

export default router

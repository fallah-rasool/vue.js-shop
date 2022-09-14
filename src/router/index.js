import { createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/category',
    name: 'category',

    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/product/:id',
    name: 'product',

    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',

    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')

  },
  {
    path: '/login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')

  },
  {
    path: '/register',
    name: 'Register',

    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
 
  },
  {
    path: '/resetpass',
    name: 'Resetpass',

    component: () => import(/* webpackChunkName: "Resetpass" */ '../views/Resetpass.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import adminhome from '../views/Admin/login.vue'
import adminDash from '../views/Admin/adminDash.vue'
import department from '../views/Admin/departments.vue'
import createAdmin from '../views/Admin/createAdmin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'adminhome',
    component: adminhome
  },
  {
    path: '/admindash',
    name: 'adminDash',
    component: adminDash,
    // beforeEnter: (to, from, next) => {
    //   const isAuthenticated = localStorage.getItem('Id') ? true : false
    //   if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
    //   else next()
    // }
  },
  {
    path: '/dept',
    name: 'dept',
    component: department
  },

  {
    path: '/createAdmin',
    name: 'createAdmin',
    component: createAdmin
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

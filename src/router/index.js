import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import adminhome from '../views/Admin/login.vue'
import adminDash from '../views/Admin/adminDash.vue'
import department from '../views/Admin/departments.vue'
import createAdmin from '../views/Admin/createAdmin.vue'
import createStudent from '../views/Admin/createStudents.vue'
import studentdash from '../views/Students/studentDash.vue'
import uploadSchFees from '../views/Students/uploadschFees.vue'
import uploadDeptDues from '../views/Students/uploadDeptdues.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/login',
    name: 'adminhome',
    component: adminhome
  },
  {
    path: '/admindash',
    name: 'adminDash',
    component: adminDash,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true : false
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'adminhome' })
      else next()
    }
  },
  {
    path: '/admin/dept',
    name: 'dept',
    component: department,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true : false
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'adminhome' })
      else next()
    }
  },

  {
    path: '/admin/createAdmin',
    name: 'createAdmin',
    component: createAdmin,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true : false
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'adminhome' })
      else next()
    }
  },
  {
    path: '/admin/createStudent',
    name: 'createStudent',
    component: createStudent,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true : false
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'adminhome' })
      else next()
    }
  },
  {
    path: '/studentdash',
    name: 'studentdash',
    component: studentdash,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true : false
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/student/schfees',
    name: 'uploadSchFees',
    component: uploadSchFees,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true : false
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/student/deptdues',
    name: 'uploadDeptDues',
    component: uploadDeptDues,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('Id') ? true : false
      if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })
      else next()
    }
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

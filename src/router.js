import Vue from 'vue'
import VueRouter from 'vue-router'

import { Auth } from './services'

import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'
import Feed from './theme/Feed.vue'
import Followers from './theme/Followers.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({
    y: 0
  }),
  routes: [
    {
      path: '/feed',
      component: Feed,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/followers',
      component: Followers,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    Auth.requiresUser()
      .then(() => {
        next()
      }).catch(() => {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      })
    return
  }
  next()
})

export default router

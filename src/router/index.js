import Vue from 'vue'
import * as guards from './guards';

import Router from 'vue-router'
import LoginPage from '../pages/login-signUp/login-signUp'
import RequestService from '../pages/home/requestService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      beforeEnter : guards.MustBeNotLoggedInGauard
    },
    {
      path: '/',
      name: 'RequestService',
      component:RequestService ,
      beforeEnter : guards.MustBeLoggedinGuard
    }

  ]
})

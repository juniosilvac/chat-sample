import Vue from 'vue'
import Router from 'vue-router'
import auth from '@app/auth/routes'
import chat from '@app/chat/routes'

const routes = [
  ...auth,
  ...chat
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})

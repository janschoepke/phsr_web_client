// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import config from './config'

function setToken (token) {
  store.token = token
  localStorage.setItem('token', token)
}

function clearToken () {
  store.token = null
  localStorage.removeItem('token')
}

function restoreTokenFromLocalStorage () {
  const token = localStorage.getItem('token')
  if (token) {
    store.token = token
  }
}

router.beforeEach((to, from, next) => {
  if (!store.token) {
    restoreTokenFromLocalStorage()
  }

  if (!to.meta.auth) {
    next()
  } else if (to.meta.auth && !store.token) {
    next({ path: '/login' })
  } else {
    Vue.http.post(
      config.apiServer + '/users/authorize',
      {
        token: store.token
      }).then(
      function success (response) {
        setToken(JSON.parse(response.bodyText).token)
        next()
      },
      function fail (response) {
        clearToken()
        next({ path: '/login' })
      }
    )
  }
})

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  http: {
    root: '',
    Authorization: 'Basic YXBpOnBhc3N3b3Jk'
  }
})

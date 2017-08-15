<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand">
      <span class="highlight">p</span>hsr
    </a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="sidebarMinimize">&#9776;</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <dropdown size="nav" class="nav-item">
        <span slot="button"><i class="fa fa-user-secret"></i>
          <span class="d-md-down-none">{{firstname}} {{lastname}}</span>
        </span>
        <div slot="dropdown-menu"class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" v-on:click="logout()"><i class="fa fa-sign-out"></i> Logout</a>
        </div>
      </dropdown>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'
import { dropdown } from 'vue-strap'

export default {
  name: 'header',
  components: {
    navbar,
    dropdown
  },
  data: function () {
    return {
      firstname: '',
      lastname: ''
    }
  },
  created: function () {
    this.firstname = localStorage.getItem('firstname')
    this.lastname = localStorage.getItem('lastname')
  },
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('firstname')
      localStorage.removeItem('lastname')
      this.$router.push('/login')
    }
  }
}
</script>

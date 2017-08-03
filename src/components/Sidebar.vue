<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">

        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> Dashboard</router-link>
        </li>
        <li class="nav-title">
          General Settings
        </li>
        <!--
        <li class="nav-item">
          <router-link :to="'/general/user-management'" class="nav-link"><i class="icon-people"></i> User Management</router-link>
        </li>
        -->
        <li class="nav-item">
          <router-link :to="'/general/victim-management'" class="nav-link"><i class="icon-people"></i> Victim-Management</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/general/group-management'" class="nav-link"><i class="icon-ghost"></i> Group-Management</router-link>
        </li>
        <li class="nav-title">
          Phishing-Mails
        </li>
        <li class="nav-item">
          <router-link :to="'/phishing/dashboard'" class="nav-link"><i class="icon-grid"></i> Overview</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/phishing/mailings'" class="nav-link"><i class="icon-envelope"></i> Mailings</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/phishing/attacks'" class="nav-link"><i class="icon-energy"></i> Attacks</router-link>
        </li>
        <li class="nav-title">
          Malware-Simulator
        </li>
        <li class="nav-item">
          <router-link :to="'/malware/simulator'" class="nav-link"><i class="icon-fire"></i> Malware-Simulator</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>

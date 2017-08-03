<template>
  <div class="animated fadeIn">
    <div class="button-panel">
      <router-link to="/general/victim-management/add" class="btn btn-info btn-sm"><i class="fa fa-plus"></i> Add Victim</router-link>
    </div>

    <div class="card">
      <div class="card-header">
        All Victims
      </div>
      <div class="card-block" id="collapseExample">
        <table class="table table-striped table-responsive">
          <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="victim in victims">
            <td>{{victim.Firstname}}</td>
            <td>{{victim.Lastname}}</td>
            <td>{{victim.Email}}</td>
            <td>{{victim.Description}}</td>
            <td class="actions">
              <router-link :to="{path: '/general/victim-management/edit/'+victim.Id}" ><i class="fa fa-pencil"></i></router-link>
              <a href="#" v-on:click="removeVictim(victim)"><i class="fa fa-trash"></i></a>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../config'
  export default {
    name: 'victim-management',
    data: function () {
      return {
        victims: []
      }
    },
    created: function () {
      this.$http.post(
        config.apiServer + '/victim-management/get-all-victims',
        {
          token: this.$store.token

        }).then(
        function success (response) {
          this.victims = JSON.parse(JSON.parse(response.bodyText).allVictims).Victims
        },
        function fail (response) {
          var result = JSON.parse(response.bodyText)
          // TODO: Local String, not out of response.
          this.errorText = result.message
          this.submitted = false
        }
      )
    },
    methods: {
      removeVictim (victim) {
        this.$http.post(
          config.apiServer + '/victim-management/delete-victim',
          {
            token: this.$store.token,
            victimID: victim.Id

          }).then(
          function success (response) {
            var index = this.victims.indexOf(victim)
            if (index > -1) {
              this.victims.splice(index, 1)
            }
          },
          function fail (response) {
            var result = JSON.parse(response.bodyText)
            // TODO: Local String, not out of response.
            this.errorText = result.message
            this.submitted = false
          }
        )
      }
    }
  }
</script>

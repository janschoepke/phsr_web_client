<template>
  <div class="animated fadeIn">
    <div class="button-panel">
      <router-link to="/general/group-management" class="btn btn-info btn-sm">back</router-link>
    </div>
    <div class="card">
      <div class="card-header">
        Add Victim(s) to Group
      </div>
      <div class="card-block" id="collapseExample">
        <table class="table table-striped table-responsive">
          <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Description</th>
            <th>Add</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="victim in victims">
            <td>{{victim.Firstname}}</td>
            <td>{{victim.Lastname}}</td>
            <td>{{victim.Email}}</td>
            <td>{{victim.Description}}</td>
            <td>
              <input type="checkbox" :value="victim.Id" v-model="checked">
            </td>
          </tr>

          </tbody>
        </table>
        <button class="btn btn-info btn-sm" v-on:click="addVictims()">Add Victims to Group</button>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../config'
  export default {
    name: 'add-victim-to-group',
    data: function () {
      return {
        victims: [],
        checked: []
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
      addVictims () {
        /* eslint-disable no-unused-vars */
        var errors = 0

        this.checked.forEach(function (current, index, array) {
          this.$http.post(
            config.apiServer + '/victim-management/add-victim-to-group',
            {
              token: this.$store.token,
              groupID: this.$route.params.id,
              victimID: this.checked[index]

            }).then(
            function success (response) {
            },
            function fail (response) {
              // TODO: Error Handling, Local String, not out of response.
              errors++
            }
          )
          if (index === array.length - 1) {
            this.$router.push('/general/group-management')
          }
        }, this)
      }
    }
  }
</script>

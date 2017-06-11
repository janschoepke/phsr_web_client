<template>
  <div class="animated fadeIn">
    <div class="row text-right">
      <router-link to="/general/group-management" class="btn btn-info btn-sm">back</router-link>
    </div>
    <div class="card">
      <div class="card-header">
        Add Victim(s) to Group
      </div>
      <div class="card-block" id="collapseExample">
        <table class="table table-striped">
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
        'http://localhost:4444/victim-management/get-all-victims',
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
        var entries = 0

        console.log({
          token: this.$store.token,
          groupID: parseInt(this.$route.params.id),
          victimID: this.victims[0].Id

        })
        for (var i = 0; i < this.checked.length; i++) {
          this.$http.post(
            'http://localhost:4444/victim-management/add-victim-to-group',
            {
              token: this.$store.token,
              groupID: this.$route.params.id,
              victimID: this.checked[i]

            }).then(
            function success (response) {
              entries++
            },
            function fail (response) {
              // TODO: Eooro Handling, Local String, not out of response.
              entries++
            }
          )
          if (entries === this.checked.length - 1) {
            this.$router.push('/general/group-management')
          }
        }
      }
    }
  }
</script>

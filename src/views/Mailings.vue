<template>
  <div class="animated fadeIn">
    <div class="row text-right">
      <router-link to="/phishing/mailings/add" class="btn btn-info btn-sm">+ Add Mailing</router-link>
    </div>

    <div class="card">
      <div class="card-header">
        All Mailings
      </div>
      <div class="card-block">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Headline</th>
            <th>From</th>
            <th>Tracking</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="mailing in mailings">
            <td>{{mailing.Name}}</td>
            <td>{{mailing.Description}}</td>
            <td>{{mailing.Headline}}</td>
            <td>{{mailing.Fromname}} ({{mailing.Fromemail}})</td>
            <td>{{mailing.Tracking}}</td>
            <td>
              <router-link :to="{path: '/phishing/mailings/edit/'+mailing.Id}" ><i class="fa fa-ban"></i> Edit</router-link>
              <a href="#" v-on:click="removeMailing(mailing)">Del</a>
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
    name: 'mailings',
    data: function () {
      return {
        mailings: []
      }
    },
    created: function () {
      this.$http.post(
        config.apiServer + '/phishing/get-user-mailings',
        {
          token: this.$store.token

        }).then(
        function success (response) {
          this.mailings = JSON.parse(JSON.parse(response.bodyText).userMailings).Mailings
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
      removeMailing (mailing) {
        console.log(mailing.Id)
        this.$http.post(
          config.apiServer + '/phishing/delete-mailing',
          {
            token: this.$store.token,
            mailingId: mailing.Id

          }).then(
          function success (response) {
            var index = this.mailings.indexOf(mailing)
            if (index > -1) {
              this.mailings.splice(index, 1)
            }
          },
          function fail (response) {
            var result = response.bodyText
            // TODO: Local String, not out of response.
            this.errorText = result.message
            this.submitted = false
          }
        )
      }
    }
  }
</script>

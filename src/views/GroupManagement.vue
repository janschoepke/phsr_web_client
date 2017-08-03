<template>
  <div class="animated fadeIn">
    <div class="button-panel">
      <router-link to="/general/group-management/add" class="btn btn-info btn-sm"><i class="fa fa-plus"></i> Add Group</router-link>
    </div>

    <div class="card" v-for="group in groups">
      <div class="card-header">
        {{group.Group.Name}}
        <div class="card-actions">
          <router-link :to="{path: '/general/group-management/edit/'+group.Group.Id}" class="btn-minimize collapsed"><i class="fa fa-pencil"></i></router-link>
          <a class="btn-minimize collapsed" v-on:click="deleteGroup(group.Group)"><i class="fa fa-trash"></i></a>
          <router-link :to="{path: '/general/group-management/add-victim/'+group.Group.Id}" class="btn-minimize collapsed"><i class="fa fa-user-plus"></i></router-link>
        </div>
      </div>
      <div class="card-block" id="collapseExample">
        <p>
          {{group.Group.Description}}
        </p>
        <table class="table table-striped table-responsive" v-if="group.Members.length > 0">
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

          <tr v-for="victim in group.Members">
            <td>{{victim.Firstname}}</td>
            <td>{{victim.Lastname}}</td>
            <td>{{victim.Email}}</td>
            <td>{{victim.Description}}</td>
            <td>
              <a href="#" v-on:click="removeVictim(victim, group.Group)"><i class="fa fa-trash"></i></a>
            </td>
          </tr>
          </tbody>
        </table>
        <p v-if="group.Members.length === 0">
          This group has no victims yet.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../config'
  export default {
    name: 'group-management',
    data: function () {
      return {
        groups: []
      }
    },
    created: function () {
      this.refreshData()
    },
    methods: {
      refreshData () {
        this.$http.post(
          config.apiServer + '/victim-management/get-groups',
          {
            token: this.$store.token

          }).then(
          function success (response) {
            this.groups = JSON.parse(JSON.parse(response.bodyText).allGroups)
          },
          function fail (response) {
            var result = JSON.parse(response.bodyText)
            // TODO: Local String, not out of response.
            this.errorText = result.message
            this.submitted = false
          }
        )
      },
      removeVictim (victim, group) {
        this.$http.post(
          config.apiServer + '/victim-management/remove-victim-from-group',
          {
            token: this.$store.token,
            victimID: victim.Id,
            groupID: group.Id

          }).then(
          function success (response) {
            var i = 0
            for (; i < this.groups.length; i++) {
              if (this.groups[i].Group === group) {
                break
              }
            }
            var victimIndex = this.groups[i].Members.indexOf(victim)
            if (i > -1 && victimIndex > -1) {
              this.groups[i].Members.splice(victimIndex, 1)
            }
          },
          function fail (response) {
            var result = JSON.parse(response.bodyText)
            // TODO: Local String, not out of response.
            this.errorText = result.message
            this.submitted = false
          }
        )
      },
      addVictim (group) {
        this.$http.post(
          config.apiServer + '/victim-management/add-victim-to-group',
          {
            token: this.$store.token,
            groupID: group.Id,
            victimID: 2

          }).then(
          function success (response) {
            this.refreshData()
          },
          function fail (response) {
            var result = JSON.parse(response.bodyText)
            // TODO: Local String, not out of response.
            this.errorText = result.message
            this.submitted = false
          }
        )
      },
      deleteGroup (group) {
        this.$http.post(
          config.apiServer + '/victim-management/delete-group',
          {
            token: this.$store.token,
            groupID: group.Id

          }).then(
          function success (response) {
            this.refreshData()
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

<template>
  <div class="animated fadeIn">

    <div class="card">
      <div class="card-header">
        <strong>{{ mode }} Group</strong>
      </div>
      <div class="card-block">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
        </div>
        <div class="form-group">
          <label for="country">Description</label>
          <textarea id="country" rows="9" class="form-control" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-sm btn-primary" v-on:click="handleFormSubmit()"><i class="fa fa-dot-circle-o"></i> Submit</button>
        <router-link to="/general/group-management" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../config'
  export default {
    name: 'edit-group',
    data: function () {
      return {
        name: '',
        description: '',
        submitted: false,
        errorText: '',
        currentRoute: '',
        mode: 'Add'
      }
    },
    created: function () {
      this.currentRoute = this.$route.path.split('/')[3]
      if (this.currentRoute === 'edit') {
        this.mode = 'Edit'
        this.$http.post(
          config.apiServer + '/victim-management/get-group',
          {
            token: this.$store.token,
            groupID: this.$route.params.id

          }).then(
          function success (response) {
            var currentGroup = JSON.parse(JSON.parse(response.bodyText).groupData)
            this.name = currentGroup.Name
            this.description = currentGroup.Description
          },
          function fail (response) {
            var result = JSON.parse(response.bodyText)
            // TODO: Local String, not out of response.
            this.errorText = result.message
            this.submitted = false
          }
        )
      }
    },
    methods: {
      handleFormSubmit () {
        this.submitted = true
        if (!this.name) {
          this.errorText = 'Please fill out all the required fields'
          this.submitted = false
          return
        }

        if (this.currentRoute === 'add') {
          this.$http.post(
            config.apiServer + '/victim-management/add-group',
            {
              token: this.$store.token,
              name: this.name,
              description: this.description
            }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('/general/group-management')
            },
            function fail (response) {
              var result = JSON.parse(response.bodyText)
              // TODO: Local String, not out of response.
              this.errorText = result.message
              this.submitted = false
            }
          )
        } else if (this.currentRoute === 'edit') {
          this.$http.post(
            config.apiServer + '/victim-management/edit-group',
            {
              token: this.$store.token,
              groupID: this.$route.params.id,
              name: this.name,
              description: this.description
            }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('/general/group-management')
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
  }
</script>

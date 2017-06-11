<template>
  <div class="animated fadeIn">

    <div class="card">
      <div class="card-header">
        <strong>{{ mode }} Victim</strong>
      </div>
      <div class="card-block">
        <div class="form-group">
          <label for="firstname">Firstname</label>
          <input type="text" class="form-control" id="firstname" placeholder="Firstname" v-model="firstname">
        </div>

        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input type="text" class="form-control" id="lastname" placeholder="Lastname" v-model="lastname">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
        </div>
        <div class="form-group">
          <label for="country">Description</label>
          <textarea id="country" rows="9" class="form-control" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-sm btn-primary" v-on:click="handleFormSubmit()"><i class="fa fa-dot-circle-o"></i> Submit</button>
        <router-link to="/general/victim-management" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'edit-victim',
    data: function () {
      return {
        firstname: '',
        lastname: '',
        email: '',
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
          'http://localhost:4444/victim-management/get-victim',
          {
            token: this.$store.token,
            victimID: this.$route.params.id

          }).then(
          function success (response) {
            var currentVictim = JSON.parse(JSON.parse(response.bodyText).victimData)
            this.firstname = currentVictim.Firstname
            this.lastname = currentVictim.Lastname
            this.description = currentVictim.Description
            this.email = currentVictim.Email
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
        if (!this.firstname || !this.lastname || !this.email) {
          this.errorText = 'Please fill out all the required fields'
          this.submitted = false
          return
        }
        console.log('submitted')

        if (this.currentRoute === 'add') {
          this.$http.post(
            'http://localhost:4444/victim-management/add-victim',
            {
              token: this.$store.token,
              name: this.firstname,
              lastName: this.lastname,
              email: this.email,
              description: this.description
            }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('/general/victim-management')
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
            'http://localhost:4444/victim-management/edit-victim',
            {
              token: this.$store.token,
              victimID: this.$route.params.id,
              name: this.firstname,
              lastName: this.lastname,
              email: this.email,
              description: this.description
            }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('/general/victim-management')
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

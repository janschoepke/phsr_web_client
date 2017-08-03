<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mx-4">
            <div class="card-block p-4">
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>

              <transition name="fade">
                <div class="card card-inverse card-danger text-xs-center" v-if="errorText">
                  <div class="card-block">
                    <blockquote class="card-blockquote">
                      <i class="fa fa-warning"></i> {{errorText}}
                    </blockquote>
                  </div>
                </div>
              </transition>
              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-user"></i></span>
                <input type="text" class="form-control" placeholder="Firstname" v-model="firstname">
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-user"></i></span>
                <input type="text" class="form-control" placeholder="Lastname" v-model="lastname">
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon">@</span>
                <input type="text" class="form-control" placeholder="Email" v-model="email">
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-lock"></i></span>
                <input type="password" class="form-control" placeholder="Password" v-model="password">
              </div>

              <div class="input-group mb-4">
                <span class="input-group-addon"><i class="icon-lock"></i></span>
                <input type="password" class="form-control" placeholder="Repeat password" v-model="password2">
              </div>

              <button type="button" class="btn btn-block btn-success" v-on:click="registerUser()" :disabled="submitted"  :class="{'submitted': submitted}">
                <span class="button-text">Create Account</span>
                <i class="fa fa-gear fa-spin"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../../config'
  export default {
    name: 'Register',
    data: function () {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
        submitted: false,
        errorText: ''
      }
    },
    methods: {
      registerUser () {
        this.submitted = true

        if (!this.firstname || !this.lastname || !this.email || !this.password || !this.password2) {
          this.errorText = 'Please fill out all the Fields.'
          this.submitted = false
          return
        }

        if (!this.comparePasswords()) {
            // Error highlight
          this.errorText = 'The entered passwords are not equal.'
          this.submitted = false
          return
        }

        this.$http.post(
          config.apiServer + '/users/register',
          {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password
          }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('login')
            },
            function fail (response) {
              var result = JSON.parse(response.bodyText)
              // TODO: Local String, not out of response.
              this.errorText = result.message
              this.submitted = false
            }
        )
      },
      comparePasswords () {
        if (this.password === this.password2) {
          return true
        }
        return false
      }
    }
  }
</script>

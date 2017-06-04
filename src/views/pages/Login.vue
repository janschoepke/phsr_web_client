<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <div class="card-block">
                <h1>Login</h1>
                <p class="text-muted">Sign in to your account</p>
                <form autocomplete="off">
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-user"></i></span>
                    <input type="email" class="form-control" placeholder="E-Mail" autocomplete="off" v-model="email">
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input type="password" class="form-control" placeholder="Password" autocomplete="off" v-model="password">
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button type="button" class="btn btn-primary px-4" v-on:click="loginUser()" :disabled="submitted">Login</button>
                    </div>
                    <div class="col-6 text-right">
                      <button type="button" class="btn btn-link px-0" disabled="disabled">Forgot password?</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card card-inverse card-primary py-5 d-md-down-none" style="width:44%">
              <div class="card-block text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>You do not have an account now? What a shame! Go for it and register right now.</p>
                  <router-link to="register" class="btn btn-primary active mt-3">Register Now!</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: '',
      errorText: '',
      submitted: false
    }
  },
  methods: {
    loginUser () {
      this.submitted = true
      if (!this.email || !this.password) {
        this.errorText = 'Please fill out all the fields.'
        this.submitted = false
      }

      this.$http.post(
        'http://localhost:4444/users/login',
        {
          email: this.email,
          password: this.password
        }).then(
        function success (response) {
          this.errorText = ''
          this.$store.token = JSON.parse(response.bodyText).token
          this.$router.push('dashboard')
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

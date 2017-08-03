<template>
  <div class="animated fadeIn">

    <transition name="fade">
      <div class="card card-inverse card-danger text-xs-center" v-if="errorText">
        <div class="card-block">
          <blockquote class="card-blockquote">
            <i class="fa fa-warning"></i> {{errorText}}
          </blockquote>
        </div>
      </div>
    </transition>

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
        <div class="form-group">
          <label for="gender-selection">Gender</label> <br>
          <label for="gender-male" class="radio-inline margin-right-50">
            <input type="radio" id="gender-male" name="gender" value="male"  v-model="gender" selected> Male
          </label>
          <label for="gender-female" class="radio-inline">
            <input type="radio" id="gender-female" name="gender" value="female"  v-model="gender"> Female
          </label>
        </div>
        <label for="birthday-selection">Birthday</label> <br>
        <div class="row">
          <div class="form-group col-sm-4">
            <label for="birthday">Day</label>
            <select id="birthday" class="form-control" v-model="birthday">
              <option v-for="option in birthdayData.days" v-bind:value="option"> {{ option }} </option>
            </select>
          </div>
          <div class="form-group col-sm-4">
            <label for="birthmonth">Month</label>
            <select id="birthmonth" class="form-control" v-model="birthmonth">
              <option v-for="option in birthdayData.months" v-bind:value="option"> {{ option }} </option>
            </select>
          </div>
          <div class="form-group col-sm-4">
            <label for="birthyear">Year</label>
            <select id="birthyear" class="form-control" v-model="birthyear">
              <option v-for="option in birthdayData.years" v-bind:value="option"> {{ option }} </option>
            </select>
          </div>

        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-sm btn-primary" v-on:click="handleFormSubmit()" :disabled="submitted"  :class="{'submitted': submitted}">
          <span class="button-text">Submit</span>
          <i class="fa fa-gear fa-spin"></i>
        </button>
        <router-link to="/general/victim-management" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../config'
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
        mode: 'Add',
        birthdayData: {},
        birthday: '1',
        birthmonth: '10',
        birthyear: '1991',
        gender: 'male'
      }
    },
    created: function () {
      this.birthdayData.days = this.createNumberArray(1, 31)
      this.birthdayData.months = this.createNumberArray(1, 12)
      this.birthdayData.years = this.createNumberArray(1920, 2017)

      this.currentRoute = this.$route.path.split('/')[3]
      if (this.currentRoute === 'edit') {
        this.mode = 'Edit'
        this.$http.post(
          config.apiServer + '/victim-management/get-victim',
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
            this.gender = (currentVictim.Gender ? 'male' : 'female')

            var tempBirthday = (currentVictim.Birthday).split('-')
            this.birthday = tempBirthday[2].slice(0, 2).replace(/^0+/, '')
            this.birthmonth = tempBirthday[1].replace(/^0+/, '')
            this.birthyear = tempBirthday[0]
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
      createNumberArray (lowEnd, highEnd) {
        var list = []
        for (var i = lowEnd; i <= highEnd; i++) {
          list.push(i)
        }
        return list
      },
      handleFormSubmit () {
        this.submitted = true
        if (!this.firstname || !this.lastname || !this.email) {
          this.errorText = 'Please fill out all the required fields'
          this.submitted = false
          return
        }

        if (this.currentRoute === 'add') {
          this.$http.post(
            config.apiServer + '/victim-management/add-victim',
            {
              token: this.$store.token,
              name: this.firstname,
              lastName: this.lastname,
              email: this.email,
              description: this.description,
              birthday: this.birthyear + '-' + this.birthmonth + '-' + this.birthday,
              gender: this.gender
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
            config.apiServer + '/victim-management/edit-victim',
            {
              token: this.$store.token,
              victimID: this.$route.params.id,
              name: this.firstname,
              lastName: this.lastname,
              email: this.email,
              description: this.description,
              birthday: this.birthyear + '-' + this.birthmonth + '-' + this.birthday,
              gender: this.gender
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

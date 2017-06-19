<template>
  <div class="animated fadeIn">

    <div class="card">
      <div class="card-header">
        <strong>{{ mode }} Mailing</strong>
      </div>
      <div class="card-block">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" rows="9" class="form-control" placeholder="Description" v-model="description"></textarea>
        </div>
        <div class="form-group">
          <label for="headline">Headline</label>
          <input type="text" class="form-control" id="headline" placeholder="Headline" v-model="headline">
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea id="content" rows="9" class="form-control" placeholder="Content" v-model="content"></textarea>
        </div>
        <div class="form-group">
          <label for="from-email">From Email</label>
          <input type="text" class="form-control" id="from-email" placeholder="From Email" v-model="from_email">
        </div>
        <div class="form-group">
          <label for="from-name">From Name</label>
          <input type="text" class="form-control" id="from-name" placeholder="From Name" v-model="from_name">
        </div>

        <div class="checkbox">
          <label for="tracking">
            <input type="checkbox" id="tracking" name="tracking" value="true" v-model="tracking"> Website-Tracking?
          </label>
        </div>

      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-sm btn-primary" v-on:click="handleFormSubmit()"><i class="fa fa-dot-circle-o"></i> Submit</button>
        <router-link to="/mailings" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../config'
  export default {
    name: 'edit-mailing',
    data: function () {
      return {
        name: '',
        description: '',
        headline: '',
        content: '',
        from_email: '',
        from_name: '',
        tracking: '',
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
          config.apiServer + '/phishing/get-mailing',
          {
            token: this.$store.token,
            mailingID: this.$route.params.id

          }).then(
          function success (response) {
            var currentMailing = JSON.parse(JSON.parse(response.bodyText).mailing)
            this.name = currentMailing.Name
            this.description = currentMailing.Description
            this.headline = currentMailing.Headline
            this.content = currentMailing.Content
            this.from_email = currentMailing.Fromemail
            this.from_name = currentMailing.Fromname
            this.tracking = currentMailing.Tracking
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
        if (!this.name || !this.headline || !this.content || !this.from_email || !this.from_name) {
          this.errorText = 'Please fill out all the required fields'
          this.submitted = false
          return
        }

        if (this.currentRoute === 'add') {
          this.$http.post(
            config.apiServer + '/phishing/add-mailing',
            {
              token: this.$store.token,
              name: this.name,
              description: this.description,
              fromEmail: this.from_email,
              fromName: this.from_name,
              subject: this.headline,
              body: this.content,
              addTracking: this.tracking
            }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('/phishing/mailings')
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
            config.apiServer + '/phishing/edit-mailing',
            {
              token: this.$store.token,
              mailingID: this.$route.params.id,
              name: this.name,
              description: this.description,
              fromEmail: this.from_email,
              fromName: this.from_name,
              subject: this.headline,
              body: this.content,
              addTracking: this.tracking
            }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('/phishing/mailings')
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

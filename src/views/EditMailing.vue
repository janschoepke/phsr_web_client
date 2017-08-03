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
        <div class="row">
          <div class="col-md-8">
            <div class="form-group">
              <label for="headline">Headline</label>
              <input type="text" class="form-control" id="headline" placeholder="Headline" v-model="headline">
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <textarea id="content" rows="12" class="form-control" placeholder="Content" v-model="content"></textarea>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-accent-primary phishing-explaination">
              <div class="card-header">
                <i class="fa fa-users"></i> Mail Personalization
              </div>
              <div class="card-block">
                <p>
                To create a general phishing mailing, enter the header and the e-mail text in the appropriate fields.
                To create a personalized spear phishing mailing, you can use the following variables in both the header and the e-mail text:
                </p>
                <ul>
                  <li><code>(phsr:firstname)</code>: The victims firstname</li>
                  <li><code>(phsr:lastname)</code>: The victims lastname</li>
                  <li><code>(phsr:email)</code>: The victims email address</li>
                  <li><code>(phsr:salutation|Sir|Madam)</code>: The victims gender-specific salutation (replace "Sir" oder "Madam" with your own salutations)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="from-email">From Email</label>
          <input type="text" class="form-control" id="from-email" placeholder="From Email" v-model="from_email">
        </div>
        <div class="form-group">
          <label for="from-name">From Name</label>
          <input type="text" class="form-control" id="from-name" placeholder="From Name" v-model="from_name">
        </div>
        <div class="row">
          <div class="col-md-6">
            <label for="smtpSwitch">SMTP Server Connection?</label><br>
            <label class="switch switch-text switch-primary">
              <input type="checkbox" checked="checked" class="switch-input" v-model="isSmtp">
              <span data-on="On" data-off="Off" class="switch-label"></span>
              <span class="switch-handle"></span>
            </label>
          </div>
          <div class="col-md-6">
            <label for="trackingSwitch">Enable Onpage Tracking?</label><br>
            <label class="switch switch-text switch-primary">
              <input type="checkbox" checked="checked" class="switch-input" v-model="tracking">
              <span data-on="On" data-off="Off" class="switch-label"></span>
              <span class="switch-handle"></span>
            </label>
          </div>
        </div>

        <transition name="fade">
          <div v-if="isSmtp">
            <div class="form-group">
              <label for="smtpHost">SMTP Host</label>
              <input type="text" class="form-control" id="smtpHost" placeholder="SMTP Host" v-model="smtpHost">
            </div>
            <div class="form-group">
              <label for="smtpUsername">SMTP Username</label>
              <input type="text" class="form-control" id="smtpUsername" placeholder="SMTP Username" v-model="smtpUser">
            </div>
            <div class="form-group">
              <label for="smtpPassword">SMTP Password</label>
              <input type="password" class="form-control" id="smtpPassword" placeholder="SMTP Password" v-model="smtpPassword">
            </div>
            <div class="form-group">
              <label for="smtpSecure">SMTP Secure</label>
              <input type="text" class="form-control" id="smtpSecure" placeholder="SMTP Secure" v-model="smtpSecure">
            </div>
            <div class="form-group">
              <label for="smtpPort">SMTP Port</label>
              <input type="number" class="form-control" id="smtpPort" placeholder="Port" v-model="smtpPort">
            </div>
          </div>
        </transition>

      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-sm btn-primary" v-on:click="handleFormSubmit()" :disabled="submitted"  :class="{'submitted': submitted}">
          <span class="button-text">Submit</span>
          <i class="fa fa-gear fa-spin"></i>
        </button>
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
        tracking: false,
        submitted: false,
        errorText: '',
        currentRoute: '',
        mode: 'Add',
        isSmtp: false,
        smtpHost: '',
        smtpUser: '',
        smtpPassword: '',
        smtpSecure: '',
        smtpPort: '',
        smtpSecures: {}
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
            console.log(currentMailing)
            this.name = currentMailing.Name
            this.description = currentMailing.Description
            this.headline = currentMailing.Headline
            this.content = currentMailing.Content
            this.from_email = currentMailing.Fromemail
            this.from_name = currentMailing.Fromname
            this.tracking = currentMailing.Tracking
            if (currentMailing.Issmtp) {
              this.isSmtp = true
              this.smtpHost = currentMailing.Smtphost
              this.smtpUser = currentMailing.Smtpuser
              this.smtpPassword = currentMailing.Smtppassword
              this.smtpSecure = currentMailing.Smtpsecure
              this.smtpPort = currentMailing.Smtpport
            }
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
          window.scrollTo(0, 0)
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
              addTracking: this.tracking,
              isSmtp: this.isSmtp,
              smtpHost: this.smtpHost,
              smtpUser: this.smtpUser,
              smtpPassword: this.smtpPassword,
              smtpSecure: this.smtpSecure,
              smtpPort: this.smtpPort
            }).then(
            function success (response) {
              this.errorText = ''

              if (this.tracking) {
                var mailingID = JSON.parse(response.bodyText).mailingID
                this.$router.push({path: '/phishing/mailings', query: { tracking: mailingID }})
              } else {
                this.$router.push('/phishing/mailings')
              }
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
              addTracking: this.tracking,
              isSmtp: this.isSmtp,
              smtpHost: this.smtpHost,
              smtpUser: this.smtpUser,
              smtpPassword: this.smtpPassword,
              smtpSecure: this.smtpSecure,
              smtpPort: this.smtpPort
            }).then(
            function success (response) {
              this.errorText = ''
              this.$router.push('/phishing/mailings')
            },
            function fail (response) {
              window.scrollTo(0, 0)
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

<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <div class="button-panel">
        <router-link to="/phishing/mailings/add" class="btn btn-info btn-sm"><i class="fa fa-plus"></i> Add Mailing</router-link>
      </div>

      <div class="card">
        <div class="card-header">
          All Mailings
        </div>
        <div class="card-block">
          <table class="table table-striped table-responsive">
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
              <td><span v-if="mailing.Tracking"><a href="#" v-on:click="setOverlayData(mailing.Id)">enabled</a></span><span v-if="!mailing.Tracking">disabled</span></td>
              <td class="actions">
                <router-link :to="{path: '/phishing/mailings/edit/'+mailing.Id}" ><i class="fa fa-pencil"></i></router-link>
                <a href="#" v-on:click="removeMailing(mailing)"><i class="fa fa-trash"></i></a>
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="trackingModal = true">Launch primary modal</button>

    </div>
    <modal title="Onpage Tracking Code" class="modal-primary" large v-model="trackingModal" @ok="trackingModal = false" effect="fade/zoom">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">Onpage Tracking</h4>
      </div>
      <div slot="modal-body" class="modal-body">
        <p>
          Website tracking was enabled during mailing creation. To enable onpage tracking, insert the following JavaScript-Snippet before <code>&lt;/body&gt;</code> on the website to be tracked.
        </p>

        <pre v-highlightjs="trackingCode">&lt;script&gt;<code class="javascript"></code>&lt;/script&gt;</pre>

      </div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-primary btn-sm" @click="trackingModal = false">Done</button>
      </div>
    </modal>
  </div>
</template>
<script>
  import config from '../config'
  import modal from 'vue-strap/src/Modal'

  export default {
    name: 'mailings',
    components: {
      modal
    },
    data: function () {
      return {
        mailings: [],
        trackingModal: false,
        currentTrackingOverlay: -1,
        server: '',
        phsrid: '',
        trackingCode: ''
      }
    },
    created: function () {
      this.server = config.apiServer
      this.phsrid = config.phsrId

      if (this.$route.query.tracking) {
        this.setOverlayData(this.$route.query.tracking)
      }
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
      setOverlayData (mailingId) {
        this.currentTrackingOverlay = mailingId
        this.trackingCode = '\n\tvar settings = {\n' +
          '\t\tphsrid: ' + this.phsrid + ',\n' +
          '\t\tmailingid:' + this.currentTrackingOverlay + ',\n' +
          '\t\tanonymizeip: false,\n' +
          '\t\tphsrserver: "' + this.server + '"\n' +
          '\t};\n\n' +
          '\t(function(p, h, s, r) {\n' +
          '\t\tr=p.createElement(s);r.src=h;p.body.appendChild(r);\n' +
          '\t})(document, "src/tracking.js", "script");\n'
        console.log(this.currentTrackingOverlay)
        this.trackingModal = true
      },
      removeMailing (mailing) {
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

<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <div class="button-panel">
        <router-link to="/phishing/attacks" class="btn btn-danger btn-sm"><i class="fa fa-arrow-left"></i> Attack Overview</router-link>
      </div>
      <div class="card">
        <div class="card-header">
          Start Phishing Attack
        </div>
        <div class="card-block">
          <div class="row">
            <div class="col-md-6">
              <p class="lead">
                Please select the mailing to send from the list below.
              </p>
              <div class="list-group" v-if="mailings.length !== 0">
                <a href="#" class="list-group-item" v-for="mailing in mailings" v-on:click="selectMailing(mailing.Id)" :class="{ 'active': selectedMailing === mailing.Id, 'list-group-item-action': selectedMailing !== mailing.Id }">{{mailing.Name}}</a>
              </div>
              <div v-if="mailings.length === 0">
                There are no mailings. <router-link to="/phishing/mailings/add">Create one now!</router-link>
              </div>
            </div>
            <div class="col-md-6">
              <p class="lead">
                Please select the recipient group from the list below.
              </p>
              <div class="list-group" v-if="groups.length !== 0">
                <a href="#" class="list-group-item" v-for="group in groups" v-on:click="selectGroup(group.Group.Id)" :class="{ 'active': selectedGroup === group.Group.Id, 'list-group-item-action': selectedGroup !== group.Group.Id }">{{group.Group.Name}} ({{group.Members.length}} recipients)</a>
              </div>
              <div v-if="groups.length === 0">
                There are no groups. <router-link to="/general/group-management/add">Create one now!</router-link>
              </div>
            </div>
          </div>
          <button class="btn btn-primary btn-block margin-top-50" :disabled="selectedMailing === null || selectedGroup === null || attackStarted === true" @click="warningModal = true">Start Phishing Attack</button>
        </div>
      </div>
    </div>
    <modal title="Start Phishing Attack" class="modal-danger" v-model="warningModal" @ok="warningModal = false" effect="fade/zoom">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">Start Phishing Attack</h4>
      </div>
      <div slot="modal-body" class="modal-body">
        <p>
          This function is for legal use only. Please use this tool only for awareness purposes and not for actual phishing scenarios. Only use domain and company names for which you have the rights of use.
        </p>

        <label class="switch switch-text switch-danger float-left">
          <input type="checkbox" checked="checked" class="switch-input" v-model="accepted">
          <span data-on="Yes" data-off="No" class="switch-label"></span>
          <span class="switch-handle"></span>
        </label>
        <label class="switch-text-label">I definitely know what I'm doing. This process is carried out at my own risk.</label>

      </div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-default btn-sm" @click="warningModal = false">Close</button>
        <button type="button" class="btn btn-danger btn-sm" @click="startPhishingAttack();warningModal = false; attackStarted = true" :disabled="!accepted">Start Attack</button>
      </div>
    </modal>
  </div>
</template>
<script>
  import config from '../config'
  import modal from 'vue-strap/src/Modal'

  export default {
    name: 'start-attack',
    components: {
      modal
    },
    data: function () {
      return {
        mailings: [],
        groups: [],
        selectedMailing: null,
        selectedGroup: null,
        warningModal: false,
        accepted: false,
        attackStarted: false
      }
    },
    created: function () {
      // Get all the Mailings to select one.
      this.$http.post(
        config.apiServer + '/phishing/get-user-mailings',
        {
          token: this.$store.token

        }).then(
        function success (response) {
          this.mailings = JSON.parse(JSON.parse(response.bodyText).userMailings).Mailings
        },
        function fail (response) {
          // var result = JSON.parse(response.bodyText)
        }
      )

      // Get all the Groups to select one.
      this.$http.post(
        config.apiServer + '/victim-management/get-groups',
        {
          token: this.$store.token

        }).then(
        function success (response) {
          if (JSON.parse(JSON.parse(response.bodyText).allGroups).length > 0) {
            this.groups = JSON.parse(JSON.parse(response.bodyText).allGroups)
          }
        },
        function fail (response) {
          // var result = JSON.parse(response.bodyText)
        }
      )
    },
    methods: {
      selectMailing (mailingId) {
        if (!this.attackStarted) {
          if (this.selectedMailing === mailingId) {
            this.selectedMailing = null
          } else {
            this.selectedMailing = mailingId
          }
        }
      },
      selectGroup (groupId) {
        if (!this.attackStarted) {
          if (this.selectedGroup === groupId) {
            this.selectedGroup = null
          } else {
            this.selectedGroup = groupId
          }
        }
      },
      startPhishingAttack () {
        this.$http.post(
          config.apiServer + '/phishing/send-mailing-to-group',
          {
            token: this.$store.token,
            groupId: this.selectedGroup,
            mailingId: this.selectedMailing

          }).then(
          function success (response) {
            this.$router.push('/phishing/attacks')
          },
          function fail (response) {
            // TODO: Error Handling.
          }
        )
      }
    }
  }
</script>

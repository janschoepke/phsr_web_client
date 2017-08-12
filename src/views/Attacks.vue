<template>
    <div class="animated fadeIn">
      <div class="button-panel">
        <router-link to="/phishing/attacks/start" class="btn btn-info btn-sm"><i class="fa fa-plus"></i> Start Attack</router-link>
      </div>

        <div class="card"  v-for="(mailing, index) in sentMailings">
          <div class="card-block">
            <div class="row">
              <div class="col-sm-12">

                <h4 class="card-title mb-0">Mailing "{{mailing.mailingsData.Name}}" to Group "{{mailing.groupData.Name}}"</h4>
                <div class="small text-muted">{{mailing.statData.length}} Mail(s) sent</div>
              </div>
            </div>
            <line-example :data="mailingData[index]['ageDistribution']" :data2="mailingData[index]['ageOpened']" :data3="mailingData[index]['ageClicked']" :data4="mailingData[index]['ageConversioned']"/>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
                <div class="text-muted">Gender Distribution</div>
                <strong><span class="color-male"><i class="fa fa-male"></i> {{mailingData[index]['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{mailingData[index]['female']}}</span></strong>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: mailingData[index]['maleRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: mailingData[index]['femaleRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
                <div class="text-muted">Open Rate (OR)</div>
                <strong>{{mailingData[index]['openings']}} of {{mailing.statData.length}} ({{mailingData[index]['openingRate']}}%)</strong>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: mailingData[index]['openingRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
                <div class="text-muted">Click Rate (CLR)</div>
                <strong>{{mailingData[index]['clicks']}} of {{mailing.statData.length}} ({{mailingData[index]['clickRate']}}%)</strong>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: mailingData[index]['clickRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
                <div class="text-muted">Conversion Rate (COR)</div>
                <strong>{{mailingData[index]['conversions']}} of {{mailing.statData.length}} ({{mailingData[index]['conversionRate']}}%)</strong>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: mailingData[index]['conversionRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-4 text-center bordered-bottom-25 top-25">
                <div class="text-muted">Gender Specific OR</div>
                <strong><span class="color-male"><i class="fa fa-male"></i> {{mailingData[index]['maleOpenings']}} of {{mailingData[index]['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{mailingData[index]['femaleOpenings']}} of {{mailingData[index]['female']}}</span></strong>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: mailingData[index]['maleOpeningRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: mailingData[index]['femaleOpeningRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-4 text-center bordered-bottom-25 top-25">
                <div class="text-muted">Gender Specific CLR</div>
                <strong><span class="color-male"><i class="fa fa-male"></i> {{mailingData[index]['maleClicks']}} of {{mailingData[index]['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{mailingData[index]['femaleClicks']}} of {{mailingData[index]['female']}}</span></strong>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: mailingData[index]['maleClickRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: mailingData[index]['femaleClickRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-4 text-center bordered-bottom-25 top-25">
                <div class="text-muted">Gender Specific COR</div>
                <strong><span class="color-male"><i class="fa fa-male"></i> {{mailingData[index]['maleConversions']}} of {{mailingData[index]['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{mailingData[index]['femaleConversions']}} of {{mailingData[index]['female']}}</span></strong>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: mailingData[index]['maleConversionRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress progress-xs mt-2">
                  <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: mailingData[index]['femaleConversionRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div class="col-md-4 top-25">
                <ul class="icons-list">
                  <li>
                    <i class="icon-screen-desktop bg-primary"></i>
                    <div class="desc">
                      <div class="title">Average Visits per User</div>
                      <small>Average Clicks per User</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Klicks per User</div>
                      <strong>{{parseFloat(mailingData[index]['webVisitData'].avgVisits).toFixed(2)}}</strong>
                    </div>
                  </li>
                  <li>
                    <i class="icon-screen-desktop bg-primary"></i>
                    <div class="desc">
                      <div class="title">Total Visits</div>
                      <small>All visits of all victims</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Visits</div>
                      <strong>{{mailingData[index]['webVisitData'].totalVisits}}</strong>
                    </div>
                  </li>
                  <li>
                    <i class="icon-screen-desktop bg-primary"></i>
                    <div class="desc">
                      <div class="title">Unique Visits</div>
                      <small>Sum of all the unique victims</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Visitors</div>
                      <strong>{{mailingData[index]['webVisitData'].totalVisitors}}</strong>
                    </div>
                  </li>
                  <li>
                    <i class="icon-cursor bg-info"></i>
                    <div class="desc">
                      <div class="title">Average Conversions per User</div>
                      <small>Average Conversions per User</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Conversions per User</div>
                      <strong>{{parseFloat(mailingData[index]['webConversionData'].avgConversions).toFixed(2)}}</strong>
                    </div>
                  </li>
                  <li>
                    <i class="icon-cursor bg-info"></i>
                    <div class="desc">
                      <div class="title">Total Conversions</div>
                      <small>All conversions of all victims</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Conversions</div>
                      <strong>{{mailingData[index]['webConversionData'].totalConversions}}</strong>
                    </div>
                  </li>
                  <li>
                    <i class="icon-cursor bg-info"></i>
                    <div class="desc">
                      <div class="title">Unique Conversioners</div>
                      <small>Sum of all the unique conversions</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Converioners</div>
                      <strong>{{mailingData[index]['webConversionData'].totalConversioners}}</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-4 text-center top-25">
                <div class="text-muted">OS Diversity</div>
                <doughnut-example :data="mailingData[index]['osDiversity']['quantity']" :labels="mailingData[index]['osDiversity']['labels']" style="height: 150px;" v-if="mailingData[index]['osDiversity']['labels'].length" />
                <div class="text-center text-muted" v-if="!mailingData[index]['osDiversity']['labels'].length">No website traffic tracked.</div>
              </div>
              <div class="col-md-4 text-center top-25">
                <div class="text-muted">Browser Diversity</div>
                <doughnut-example :data="mailingData[index]['browserDiversity']['quantity']" :labels="mailingData[index]['browserDiversity']['labels']" style="height: 150px;" v-if="mailingData[index]['osDiversity']['labels'].length" />
                <div class="text-center text-muted" v-if="!mailingData[index]['osDiversity']['labels'].length">No website traffic tracked.</div>
              </div>
            </div>
          </div>
        </div><!--/.card-->

  </div>
</template>
<script>
  import config from '../config'
  import LineExample from './charts/LineExample'
  import DoughnutExample from './charts/DoughnutExample'

  export default {
    name: 'attacks',
    data: function () {
      return {
        sentMailings: [],
        mailingData: []
      }
    },
    components: {
      LineExample,
      DoughnutExample
    },
    created: function () {
      this.$http.post(
        config.apiServer + '/phishing/get-all-sent-mailings',
        {
          token: this.$store.token

        }).then(
        function success (response) {
          this.sentMailings = JSON.parse(JSON.parse(response.bodyText).mailings)
          console.log(this.sentMailings)
          this.calculateMailingData()
        },
        function fail (response) {
          // var result = JSON.parse(response.bodyText)
        }
      )
    },
    methods: {
      calculateMailingData () {
        var self = this
        this.sentMailings.forEach(function (currentValue, index, array) {
          var tempOpenings = 0
          var tempClicks = 0
          var tempConversions = 0
          var tempMale = 0
          var tempFemale = 0
          var currentRecipients = 0
          var tempMaleOpened = 0
          var tempFemaleOpened = 0
          var tempMaleClicked = 0
          var tempFemaleClicked = 0
          var tempMaleConversioned = 0
          var tempFemaleConversioned = 0
          var tempAgeDistribution = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          var tempAgeOpened = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          var tempAgeClicked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          var tempAgeConversioned = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

          self.mailingData[index] = []

          currentValue.statData.forEach(function (currentValue, index, array) {
            tempOpenings += currentValue.Opened
            tempClicks += currentValue.Clicked
            tempConversions += currentValue.Conversioned

            if (currentValue.Victim.Gender) {
              tempMale++
              if (currentValue.Opened) {
                tempMaleOpened++
              }
              if (currentValue.Clicked) {
                tempMaleClicked++
              }
              if (currentValue.Conversioned) {
                tempMaleConversioned++
              }
            } else {
              tempFemale++
              if (currentValue.Opened) {
                tempFemaleOpened++
              }
              if (currentValue.Clicked) {
                tempFemaleClicked++
              }
              if (currentValue.Conversioned) {
                tempFemaleConversioned++
              }
            }

            var age = self.getAge(currentValue.Victim.Birthday)
            switch (true) {
              case (age >= 15 && age <= 20):
                tempAgeDistribution[0]++
                if (currentValue.Opened) tempAgeOpened[0]++
                if (currentValue.Clicked) tempAgeClicked[0]++
                if (currentValue.Conversioned) tempAgeConversioned[0]++
                break
              case (age > 20 && age <= 25):
                tempAgeDistribution[1]++
                if (currentValue.Opened) tempAgeOpened[1]++
                if (currentValue.Clicked) tempAgeClicked[1]++
                if (currentValue.Conversioned) tempAgeConversioned[1]++
                break
              case (age > 25 && age <= 30):
                tempAgeDistribution[2]++
                if (currentValue.Opened) tempAgeOpened[2]++
                if (currentValue.Clicked) tempAgeClicked[2]++
                if (currentValue.Conversioned) tempAgeConversioned[2]++
                break
              case (age > 30 && age <= 35):
                tempAgeDistribution[3]++
                if (currentValue.Opened) tempAgeOpened[3]++
                if (currentValue.Clicked) tempAgeClicked[3]++
                if (currentValue.Conversioned) tempAgeConversioned[3]++
                break
              case (age > 35 && age <= 40):
                tempAgeDistribution[4]++
                if (currentValue.Opened) tempAgeOpened[4]++
                if (currentValue.Clicked) tempAgeClicked[4]++
                if (currentValue.Conversioned) tempAgeConversioned[4]++
                break
              case (age > 40 && age <= 45):
                tempAgeDistribution[5]++
                if (currentValue.Opened) tempAgeOpened[5]++
                if (currentValue.Clicked) tempAgeClicked[5]++
                if (currentValue.Conversioned) tempAgeConversioned[5]++
                break
              case (age > 45 && age <= 50):
                tempAgeDistribution[6]++
                if (currentValue.Opened) tempAgeOpened[6]++
                if (currentValue.Clicked) tempAgeClicked[6]++
                if (currentValue.Conversioned) tempAgeConversioned[6]++
                break
              case (age > 50 && age <= 55):
                tempAgeDistribution[7]++
                if (currentValue.Opened) tempAgeOpened[7]++
                if (currentValue.Clicked) tempAgeClicked[7]++
                if (currentValue.Conversioned) tempAgeConversioned[7]++
                break
              case (age > 55 && age <= 60):
                tempAgeDistribution[8]++
                if (currentValue.Opened) tempAgeOpened[8]++
                if (currentValue.Clicked) tempAgeClicked[8]++
                if (currentValue.Conversioned) tempAgeConversioned[8]++
                break
              case (age > 60 && age <= 65):
                tempAgeDistribution[9]++
                if (currentValue.Opened) tempAgeOpened[9]++
                if (currentValue.Clicked) tempAgeClicked[9]++
                if (currentValue.Conversioned) tempAgeConversioned[9]++
                break
              case (age > 65 && age <= 70):
                tempAgeDistribution[10]++
                if (currentValue.Opened) tempAgeOpened[10]++
                if (currentValue.Clicked) tempAgeClicked[10]++
                if (currentValue.Conversioned) tempAgeConversioned[10]++
                break
              case (age > 70 && age <= 75):
                tempAgeDistribution[11]++
                if (currentValue.Opened) tempAgeOpened[11]++
                if (currentValue.Clicked) tempAgeClicked[11]++
                if (currentValue.Conversioned) tempAgeConversioned[11]++
                break
              default:
                break
            }
            currentRecipients = array.length
          })

          var browserLabels = []
          var browserQuantity = []
          currentValue.browserData.forEach(function (currentValue) {
            browserLabels.push(currentValue.browser)
            browserQuantity.push(currentValue.CountBrowser)
          })

          var osLabels = []
          var osQuantity = []
          currentValue.osData.forEach(function (currentValue) {
            osLabels.push(currentValue.os)
            osQuantity.push(currentValue.CountOs)
          })

          self.mailingData[index]['openings'] = tempOpenings
          self.mailingData[index]['clicks'] = tempClicks
          self.mailingData[index]['conversions'] = tempConversions
          self.mailingData[index]['openingRate'] = self.calculatePercentage(tempOpenings, currentRecipients).toFixed(2)
          self.mailingData[index]['clickRate'] = self.calculatePercentage(tempClicks, currentRecipients).toFixed(2)
          self.mailingData[index]['conversionRate'] = self.calculatePercentage(tempConversions, currentRecipients).toFixed(2)
          self.mailingData[index]['male'] = tempMale
          self.mailingData[index]['maleRate'] = self.calculatePercentage(tempMale, currentRecipients).toFixed(2)
          self.mailingData[index]['female'] = tempFemale
          self.mailingData[index]['femaleRate'] = self.calculatePercentage(tempFemale, currentRecipients).toFixed(2)
          self.mailingData[index]['maleOpenings'] = tempMaleOpened
          self.mailingData[index]['femaleOpenings'] = tempFemaleOpened
          self.mailingData[index]['maleOpeningRate'] = self.calculatePercentage(tempMaleOpened, tempMale).toFixed(2)
          self.mailingData[index]['femaleOpeningRate'] = self.calculatePercentage(tempFemaleOpened, tempFemale).toFixed(2)
          self.mailingData[index]['maleClicks'] = tempMaleClicked
          self.mailingData[index]['femaleClicks'] = tempFemaleClicked
          self.mailingData[index]['maleClickRate'] = self.calculatePercentage(tempMaleClicked, tempMale).toFixed(2)
          self.mailingData[index]['femaleClickRate'] = self.calculatePercentage(tempFemaleClicked, tempFemale).toFixed(2)
          self.mailingData[index]['maleConversions'] = tempMaleConversioned
          self.mailingData[index]['femaleConversions'] = tempFemaleConversioned
          self.mailingData[index]['maleConversionRate'] = self.calculatePercentage(tempMaleConversioned, tempMale).toFixed(2)
          self.mailingData[index]['femaleConversionRate'] = self.calculatePercentage(tempFemaleConversioned, tempMale).toFixed(2)

          self.mailingData[index]['ageDistribution'] = tempAgeDistribution
          self.mailingData[index]['ageOpened'] = tempAgeOpened
          self.mailingData[index]['ageClicked'] = tempAgeClicked
          self.mailingData[index]['ageConversioned'] = tempAgeConversioned

          self.mailingData[index]['webVisitData'] = currentValue.webVisitData
          self.mailingData[index]['webConversionData'] = currentValue.webConversionData

          self.mailingData[index]['browserDiversity'] = []
          self.mailingData[index]['browserDiversity']['labels'] = browserLabels
          self.mailingData[index]['browserDiversity']['quantity'] = browserQuantity

          self.mailingData[index]['osDiversity'] = []
          self.mailingData[index]['osDiversity']['labels'] = osLabels
          self.mailingData[index]['osDiversity']['quantity'] = osQuantity
        })
      },
      calculatePercentage (number1, number2) {
        var percentage = (number1 / number2) * 100
        return percentage
      },
      getAge (dateString) {
        var today = new Date()
        var birthDate = new Date(dateString)
        var age = today.getFullYear() - birthDate.getFullYear()
        var m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--
        }
        return age
      }
    }
  }
</script>

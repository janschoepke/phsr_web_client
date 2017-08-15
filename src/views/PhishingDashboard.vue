<template>
  <div class="animated fadeIn">

    <div class="card" v-if="statisticsData['sumMailings'] > 0">
      <div class="card-block">
        <div class="row">
          <div class="col-sm-12 margin-bottom-25">
            <h4 class="card-title mb-0">Overall phishing statistics</h4>
          </div>
          <div class="col-md-6">
            <div class="card card-inverse card-info">
              <div class="card-block pb-0">
                <h4 class="mb-0">{{statisticsData['sumMailings']}}</h4>
                <p>mails sent</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card card-inverse card-info">
              <div class="card-block pb-0">
                <h4 class="mb-0">{{statisticsData['uniqueUsers']}}</h4>
                <p>unique victims</p>
              </div>
            </div>
          </div>
        </div>
        <line-example :data="statisticsData['ageDistribution']" :data2="statisticsData['ageOpened']" :data3="statisticsData['ageClicked']" :data4="statisticsData['ageConversioned']" />
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
            <div class="text-muted">Gender Distribution</div>
            <strong><span class="color-male"><i class="fa fa-male"></i> {{statisticsData['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{statisticsData['female']}}</span></strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: statisticsData['maleRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
              <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: statisticsData['femaleRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
            <div class="text-muted">Open Rate (OR)</div>
            <strong>{{statisticsData['openings']}} of {{statisticsData['sumMailings']}} ({{statisticsData['openingRate']}}%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: statisticsData['openingRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
            <div class="text-muted">Click Rate (CLR)</div>
            <strong>{{statisticsData['clicks']}} of {{statisticsData['sumMailings']}} ({{statisticsData['clickRate']}}%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: statisticsData['clickRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center bordered-bottom-25 top-25">
            <div class="text-muted">Conversion Rate (COR)</div>
            <strong>{{statisticsData['conversions']}} of {{statisticsData['sumMailings']}} ({{statisticsData['conversionRate']}}%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: statisticsData['conversionRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="col-md-4 text-center bordered-bottom-25 top-25">
            <div class="text-muted">Gender Specific OR</div>
            <strong><span class="color-male"><i class="fa fa-male"></i> {{statisticsData['maleOpened']}} of {{statisticsData['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{statisticsData['femaleOpened']}} of {{statisticsData['female']}}</span></strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: statisticsData['maleOpenedRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: statisticsData['femaleOpenedRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="col-md-4 text-center bordered-bottom-25 top-25">
            <div class="text-muted">Gender Specific CLR</div>
            <strong><span class="color-male"><i class="fa fa-male"></i> {{statisticsData['maleClicked']}} of {{statisticsData['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{statisticsData['femaleClicked']}} of {{statisticsData['female']}}</span></strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: statisticsData['maleClickedRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: statisticsData['femaleClickedRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="col-md-4 text-center bordered-bottom-25 top-25">
            <div class="text-muted">Gender Specific COR</div>
            <strong><span class="color-male"><i class="fa fa-male"></i> {{statisticsData['maleConversioned']}} of {{statisticsData['male']}}</span> | <span class="color-female"><i class="fa fa-female"></i> {{statisticsData['femaleConversioned']}} of {{statisticsData['female']}}</span></strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-info" role="progressbar" v-bind:style="{width: statisticsData['maleConversionedRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-female" role="progressbar" v-bind:style="{width: statisticsData['femaleConversionedRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div><!--/.card-->
  </div>
</template>
<script>
  import config from '../config'
  import LineExample from './charts/LineExample'

  export default {
    name: 'phishing-dashboard',
    components: {
      LineExample
    },
    data: function () {
      return {
        statistics: [],
        statisticsData: []
      }
    },
    created: function () {
      this.$http.post(
        config.apiServer + '/phishing/get-all-statistics',
        {
          token: this.$store.token

        }).then(
        function success (response) {
          this.statistics = JSON.parse(JSON.parse(response.bodyText).statistics)
          this.calculateStatisticsData()
        },
        function fail (response) {
          // var result = JSON.parse(response.bodyText)
        }
      )
    },
    methods: {
      calculateStatisticsData () {
        var uniqueUsers = this.statistics.length
        var sumMailings = 0
        var tempAgeDistribution = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        var tempAgeOpened = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        var tempAgeClicked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        var tempAgeConversioned = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        var tempOpenings = 0
        var tempClicks = 0
        var tempConversions = 0
        var tempMale = 0
        var tempFemale = 0
        var tempMaleOpened = 0
        var tempMaleClicked = 0
        var tempMaleConversioned = 0
        var tempFemaleOpened = 0
        var tempFemaleClicked = 0
        var tempFemaleConversioned = 0

        var self = this

        this.statistics.forEach(function (current, index, array) {
          var age = self.getAge(current.Birthday)
          var gender = current.Gender
          switch (true) {
            case (age >= 15 && age <= 20):
              tempAgeDistribution[0] += current.VictimMailingss.length
              break
            case (age > 20 && age <= 25):
              tempAgeDistribution[1] += current.VictimMailingss.length
              break
            case (age > 25 && age <= 30):
              tempAgeDistribution[2] += current.VictimMailingss.length
              break
            case (age > 30 && age <= 35):
              tempAgeDistribution[3] += current.VictimMailingss.length
              break
            case (age > 35 && age <= 40):
              tempAgeDistribution[4] += current.VictimMailingss.length
              break
            case (age > 40 && age <= 45):
              tempAgeDistribution[5] += current.VictimMailingss.length
              break
            case (age > 45 && age <= 50):
              tempAgeDistribution[6] += current.VictimMailingss.length
              break
            case (age > 50 && age <= 55):
              tempAgeDistribution[7] += current.VictimMailingss.length
              break
            case (age > 55 && age <= 60):
              tempAgeDistribution[8] += current.VictimMailingss.length
              break
            case (age > 60 && age <= 65):
              tempAgeDistribution[9] += current.VictimMailingss.length
              break
            case (age > 65 && age <= 70):
              tempAgeDistribution[10] += current.VictimMailingss.length
              break
            case (age > 70 && age <= 75):
              tempAgeDistribution[11] += current.VictimMailingss.length
              break
            default:
              break
          }

          current.VictimMailingss.forEach(function (mailing, index, array) {
            sumMailings++
            tempOpenings += mailing.Opened
            tempClicks += mailing.Clicked
            tempConversions += mailing.Conversioned

            if (gender) {
              tempMale++
              if (mailing.Opened) {
                tempMaleOpened++
              }
              if (mailing.Clicked) {
                tempMaleClicked++
              }
              if (mailing.Conversioned) {
                tempMaleConversioned++
              }
            } else {
              tempFemale++
              if (mailing.Opened) {
                tempFemaleOpened++
              }
              if (mailing.Clicked) {
                tempFemaleClicked++
              }
              if (mailing.Conversioned) {
                tempFemaleConversioned++
              }
            }

            switch (true) {
              case (age >= 15 && age <= 20):
                if (mailing.Opened) tempAgeOpened[0]++
                if (mailing.Clicked) tempAgeClicked[0]++
                if (mailing.Conversioned) tempAgeConversioned[0]++
                break
              case (age > 20 && age <= 25):
                if (mailing.Opened) tempAgeOpened[1]++
                if (mailing.Clicked) tempAgeClicked[1]++
                if (mailing.Conversioned) tempAgeConversioned[1]++
                break
              case (age > 25 && age <= 30):
                if (mailing.Opened) tempAgeOpened[2]++
                if (mailing.Clicked) tempAgeClicked[2]++
                if (mailing.Conversioned) tempAgeConversioned[2]++
                break
              case (age > 30 && age <= 35):
                if (mailing.Opened) tempAgeOpened[3]++
                if (mailing.Clicked) tempAgeClicked[3]++
                if (mailing.Conversioned) tempAgeConversioned[3]++
                break
              case (age > 35 && age <= 40):
                if (mailing.Opened) tempAgeOpened[4]++
                if (mailing.Clicked) tempAgeClicked[4]++
                if (mailing.Conversioned) tempAgeConversioned[4]++
                break
              case (age > 40 && age <= 45):
                if (mailing.Opened) tempAgeOpened[5]++
                if (mailing.Clicked) tempAgeClicked[5]++
                if (mailing.Conversioned) tempAgeConversioned[5]++
                break
              case (age > 45 && age <= 50):
                if (mailing.Opened) tempAgeOpened[6]++
                if (mailing.Clicked) tempAgeClicked[6]++
                if (mailing.Conversioned) tempAgeConversioned[6]++
                break
              case (age > 50 && age <= 55):
                if (mailing.Opened) tempAgeOpened[7]++
                if (mailing.Clicked) tempAgeClicked[7]++
                if (mailing.Conversioned) tempAgeConversioned[7]++
                break
              case (age > 55 && age <= 60):
                if (mailing.Opened) tempAgeOpened[8]++
                if (mailing.Clicked) tempAgeClicked[8]++
                if (mailing.Conversioned) tempAgeConversioned[8]++
                break
              case (age > 60 && age <= 65):
                if (mailing.Opened) tempAgeOpened[9]++
                if (mailing.Clicked) tempAgeClicked[9]++
                if (mailing.Conversioned) tempAgeConversioned[9]++
                break
              case (age > 65 && age <= 70):
                if (mailing.Opened) tempAgeOpened[10]++
                if (mailing.Clicked) tempAgeClicked[10]++
                if (mailing.Conversioned) tempAgeConversioned[10]++
                break
              case (age > 70 && age <= 75):
                if (mailing.Opened) tempAgeOpened[11]++
                if (mailing.Clicked) tempAgeClicked[11]++
                if (mailing.Conversioned) tempAgeConversioned[11]++
                break
              default:
                break
            }
          })
        })

        var tempStatisticsData = {}
        tempStatisticsData['uniqueUsers'] = uniqueUsers
        tempStatisticsData['sumMailings'] = sumMailings
        tempStatisticsData['ageDistribution'] = tempAgeDistribution
        tempStatisticsData['ageOpened'] = tempAgeOpened
        tempStatisticsData['ageClicked'] = tempAgeClicked
        tempStatisticsData['ageConversioned'] = tempAgeConversioned
        tempStatisticsData['openings'] = tempOpenings
        tempStatisticsData['clicks'] = tempClicks
        tempStatisticsData['conversions'] = tempConversions
        tempStatisticsData['openingRate'] = this.calculatePercentage(tempOpenings, sumMailings).toFixed(2)
        tempStatisticsData['clickRate'] = this.calculatePercentage(tempClicks, sumMailings).toFixed(2)
        tempStatisticsData['conversionRate'] = this.calculatePercentage(tempConversions, sumMailings).toFixed(2)
        tempStatisticsData['male'] = tempMale
        tempStatisticsData['maleRate'] = this.calculatePercentage(tempMale, sumMailings).toFixed(2)
        tempStatisticsData['female'] = tempFemale
        tempStatisticsData['femaleRate'] = this.calculatePercentage(tempFemale, sumMailings).toFixed(2)
        tempStatisticsData['maleOpened'] = tempMaleOpened
        tempStatisticsData['maleOpenedRate'] = this.calculatePercentage(tempMaleOpened, tempMale).toFixed(2)
        tempStatisticsData['maleClicked'] = tempMaleClicked
        tempStatisticsData['maleClickedRate'] = this.calculatePercentage(tempMaleClicked, tempMale).toFixed(2)
        tempStatisticsData['maleConversioned'] = tempMaleConversioned
        tempStatisticsData['maleConversionedRate'] = this.calculatePercentage(tempMaleConversioned, tempMale).toFixed(2)
        tempStatisticsData['femaleOpened'] = tempFemaleOpened
        tempStatisticsData['femaleOpenedRate'] = this.calculatePercentage(tempFemaleOpened, tempFemale).toFixed(2)
        tempStatisticsData['femaleClicked'] = tempFemaleClicked
        tempStatisticsData['femaleClickedRate'] = this.calculatePercentage(tempFemaleClicked, tempFemale).toFixed(2)
        tempStatisticsData['femaleConversioned'] = tempFemaleConversioned
        tempStatisticsData['femaleConversionedRate'] = this.calculatePercentage(tempFemaleConversioned, tempFemale).toFixed(2)
        this.statisticsData = tempStatisticsData
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

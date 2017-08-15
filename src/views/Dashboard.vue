<template>
  <div class="animated fadeIn">

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            Total summary
          </div>
          <div class="card-block">
            <div class="row">
              <div class="col-sm-12 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout callout-info">
                      <small class="text-muted">Victims</small><br>
                      <strong class="h4">{{victimStatistics.length}}</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-danger">
                      <small class="text-muted">Groups</small><br>
                      <strong class="h4">{{groupMailingStatistics.groups}}</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="horizontal-bars half-height">
                  <li>
                    <div class="title">
                      15-20 ({{victimStatisticsData['ageDistribution'][0]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][0], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      20-25 ({{victimStatisticsData['ageDistribution'][1]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][1], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      25-30 ({{victimStatisticsData['ageDistribution'][2]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][2], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      30-35 ({{victimStatisticsData['ageDistribution'][3]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][3], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      35-40 ({{victimStatisticsData['ageDistribution'][4]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][4], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      40-45 ({{victimStatisticsData['ageDistribution'][5]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][5], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      45-50 ({{victimStatisticsData['ageDistribution'][6]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][6], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      50-55 ({{victimStatisticsData['ageDistribution'][7]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][7], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      55-60 ({{victimStatisticsData['ageDistribution'][8]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][8], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      60-65 ({{victimStatisticsData['ageDistribution'][9]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][9], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      65-70 ({{victimStatisticsData['ageDistribution'][10]}})
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width: calculatePercentage(victimStatisticsData['ageDistribution'][10], victimStatistics.length) + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="legend">
                    <span class="badge badge-pill badge-danger"></span> <small>age diversity</small>
                  </li>
                </ul>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout callout-warning">
                      <small class="text-muted">Mailings</small><br>
                      <strong class="h4">{{groupMailingStatistics.mailings}}</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-success">
                      <small class="text-muted">Phishing Attacks</small><br>
                      <strong class="h4">{{statisticsData['sumMailings']}}</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="horizontal-bars type-2">
                  <li>
                    <i class="icon-user"></i>
                    <span class="title">Male</span>
                    <span class="value">{{victimStatisticsData['male']}} <span class="text-muted small">({{victimStatisticsData['maleRate']}}%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-warning" role="progressbar" v-bind:style="{width: victimStatisticsData['maleRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="icon-user-female"></i>
                    <span class="title">Female</span>
                    <span class="value">{{victimStatisticsData['female']}} <span class="text-muted small">({{victimStatisticsData['femaleRate']}}%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-warning" role="progressbar" v-bind:style="{width: victimStatisticsData['femaleRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <span class="title">Open Rate</span>
                    <span class="value">{{statisticsData['openings']}} <span class="text-muted small">({{statisticsData['openingRate']}}%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: statisticsData['openingRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span class="title">Click Rate</span>
                    <span class="value">{{statisticsData['clicks']}} <span class="text-muted small">({{statisticsData['clickRate']}}%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: statisticsData['clickRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span class="title">Conversion Rate</span>
                    <span class="value">{{statisticsData['conversions']}} <span class="text-muted small">({{statisticsData['conversionRate']}}%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: statisticsData['conversionRate'] + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout">
                      <small class="text-muted">Unique Phishing Victims</small><br>
                      <strong class="h4"> {{statisticsData['uniqueUsers']}}</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-primary">
                      <small class="text-muted">Malware</small><br>
                      <strong class="h4">5%</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="icons-list">
                  <li>
                    <i class="icon-screen-desktop bg-primary"></i>
                    <div class="desc">
                      <div class="title">iMac 4k</div>
                      <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Sold this week</div>
                      <strong>1.924</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-screen-smartphone bg-info"></i>
                    <div class="desc">
                      <div class="title">Samsung Galaxy Edge</div>
                      <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Sold this week</div>
                      <strong>1.224</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-screen-smartphone bg-warning"></i>
                    <div class="desc">
                      <div class="title">iPhone 6S</div>
                      <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Sold this week</div>
                      <strong>1.163</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-user bg-danger"></i>
                    <div class="desc">
                      <div class="title">Premium accounts</div>
                      <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Sold this week</div>
                      <strong>928</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-social-spotify bg-success"></i>
                    <div class="desc">
                      <div class="title">Spotify Subscriptions</div>
                      <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Sold this week</div>
                      <strong>893</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-cloud-download bg-danger"></i>
                    <div class="desc">
                      <div class="title">Ebook</div>
                      <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Downloads</div>
                      <strong>121.924</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li>
                    <i class="icon-camera bg-warning"></i>
                    <div class="desc">
                      <div class="title">Photos</div>
                      <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    <div class="value">
                      <div class="small text-muted">Uploaded</div>
                      <strong>12.125</strong>
                    </div>
                    <div class="actions">
                      <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                    </div>
                  </li>
                  <li class="divider text-center">
                    <button type="button" class="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="show more"><i class="icon-options"></i></button>
                  </li>
                </ul>
              </div><!--/.col-->
            </div><!--/.row-->
          </div>
        </div>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
import config from '../config'
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'

import { dropdown } from 'vue-strap'

export default {
  name: 'dashboard',
  components: {
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    dropdown
  },
  data: function () {
    return {
      statistics: [],
      statisticsData: [],
      victimStatistics: [],
      victimStatisticsData: [],
      groupMailingStatistics: []
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

    this.$http.post(
      config.apiServer + '/phishing/get-victim-statistics',
      {
        token: this.$store.token

      }).then(
      function success (response) {
        this.victimStatistics = JSON.parse(JSON.parse(response.bodyText).statistics)
        console.log(this.victimStatistics)
        this.calculateVictimStatisticsData()
      },
      function fail (response) {
        // var result = JSON.parse(response.bodyText)
      }
    )

    this.$http.post(
      config.apiServer + '/phishing/get-group-mailing-statistics',
      {
        token: this.$store.token

      }).then(
      function success (response) {
        this.groupMailingStatistics = JSON.parse(JSON.parse(response.bodyText).statistics)
        console.log(this.groupMailingStatistics)
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
      var tempOpenings = 0
      var tempClicks = 0
      var tempConversions = 0

      this.statistics.forEach(function (current) {
        current.VictimMailingss.forEach(function (mailing) {
          sumMailings++
          tempOpenings += mailing.Opened
          tempClicks += mailing.Clicked
          tempConversions += mailing.Conversioned
        })
      })

      var tempStatisticsData = {}
      tempStatisticsData['uniqueUsers'] = uniqueUsers
      tempStatisticsData['sumMailings'] = sumMailings
      tempStatisticsData['openings'] = tempOpenings
      tempStatisticsData['clicks'] = tempClicks
      tempStatisticsData['conversions'] = tempConversions
      tempStatisticsData['openingRate'] = this.calculatePercentage(tempOpenings, sumMailings).toFixed(2)
      tempStatisticsData['clickRate'] = this.calculatePercentage(tempClicks, sumMailings).toFixed(2)
      tempStatisticsData['conversionRate'] = this.calculatePercentage(tempConversions, sumMailings).toFixed(2)
      this.statisticsData = tempStatisticsData
    },
    calculateVictimStatisticsData () {
      var tempSum = this.victimStatistics.length
      var tempMale = 0
      var tempFemale = 0
      var tempAgeDistribution = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      var self = this

      this.victimStatistics.forEach(function (current) {
        if (current.Gender) {
          tempMale++
        } else {
          tempFemale++
        }
        var age = self.getAge(current.Birthday)
        switch (true) {
          case (age >= 15 && age <= 20):
            tempAgeDistribution[0]++
            break
          case (age > 20 && age <= 25):
            tempAgeDistribution[1]++
            break
          case (age > 25 && age <= 30):
            tempAgeDistribution[2]++
            break
          case (age > 30 && age <= 35):
            tempAgeDistribution[3]++
            break
          case (age > 35 && age <= 40):
            tempAgeDistribution[4]++
            break
          case (age > 40 && age <= 45):
            tempAgeDistribution[5]++
            break
          case (age > 45 && age <= 50):
            tempAgeDistribution[6]++
            break
          case (age > 50 && age <= 55):
            tempAgeDistribution[7]++
            break
          case (age > 55 && age <= 60):
            tempAgeDistribution[8]++
            break
          case (age > 60 && age <= 65):
            tempAgeDistribution[9]++
            break
          case (age > 65 && age <= 70):
            tempAgeDistribution[10]++
            break
          case (age > 70 && age <= 75):
            tempAgeDistribution[11]++
            break
          default:
            break
        }
      })

      var tempVictimStatisticsData = []
      tempVictimStatisticsData['male'] = tempMale
      tempVictimStatisticsData['female'] = tempFemale
      tempVictimStatisticsData['ageDistribution'] = tempAgeDistribution
      tempVictimStatisticsData['maleRate'] = this.calculatePercentage(tempMale, tempSum).toFixed(2)
      tempVictimStatisticsData['femaleRate'] = this.calculatePercentage(tempFemale, tempSum).toFixed(2)
      console.log('STATE:')
      console.log(tempVictimStatisticsData)
      this.victimStatisticsData = tempVictimStatisticsData
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

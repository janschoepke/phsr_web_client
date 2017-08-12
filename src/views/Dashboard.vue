<template>
  <div class="animated fadeIn">

    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <div class="social-box facebook">
          <i class="fa fa-facebook"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" height="90"/>
          </div>
          <ul>
            <li>
              <strong>89k</strong>
              <span>friends</span>
            </li>
            <li>
              <strong>459</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-3">
        <div class="social-box twitter">
          <i class="fa fa-twitter"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[1, 13, 9, 17, 34, 41, 38]" height="90"/>
          </div>
          <ul>
            <li>
              <strong>973k</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>1.792</strong>
              <span>tweets</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-3">

        <div class="social-box linkedin">
          <i class="fa fa-linkedin"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[78, 81, 80, 45, 34, 12, 40]" height="90"/>
          </div>
          <ul>
            <li>
              <strong>500+</strong>
              <span>contacts</span>
            </li>
            <li>
              <strong>292</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-3">
        <div class="social-box google-plus">
          <i class="fa fa-google-plus"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" height="90"/>
          </div>
          <ul>
            <li>
              <strong>894</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>92</strong>
              <span>circles</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->
    </div><!--/.row-->

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
                      <strong class="h4">9,123</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-danger">
                      <small class="text-muted">Groups</small><br>
                      <strong class="h4">22,643</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="horizontal-bars">
                  <li>
                    <div class="title">
                      Monday
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 34%" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      Tuesday
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      Wednesday
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 12%" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      Thursday
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 91%" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      Friday
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 22%" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 73%" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      Saturday
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 53%" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      Sunday
                    </div>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 9%" aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-danger" role="progressbar" style="width: 69%" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="legend">
                    <span class="badge badge-pill badge-info"></span> <small>New clients</small> &nbsp; <span class="badge badge-pill badge-danger"></span> <small>Recurring clients</small>
                  </li>
                </ul>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout callout-warning">
                      <small class="text-muted">Mailings</small><br>
                      <strong class="h4">78,623</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-success">
                      <small class="text-muted">Phishing Attacks</small><br>
                      <strong class="h4">49,123</strong>
                    </div>
                  </div><!--/.col-->
                </div><!--/.row-->
                <hr class="mt-0">
                <ul class="horizontal-bars type-2">
                  <li>
                    <i class="icon-user"></i>
                    <span class="title">Male</span>
                    <span class="value">43%</span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="icon-user-female"></i>
                    <span class="title">Female</span>
                    <span class="value">37%</span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 37%" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <i class="icon-globe"></i>
                    <span class="title">Organic Search</span>
                    <span class="value">191,235 <span class="text-muted small">(56%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="icon-social-facebook"></i>
                    <span class="title">Facebook</span>
                    <span class="value">51,223 <span class="text-muted small">(15%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="icon-social-twitter"></i>
                    <span class="title">Twitter</span>
                    <span class="value">37,564 <span class="text-muted small">(11%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 11%" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="icon-social-linkedin"></i>
                    <span class="title">LinkedIn</span>
                    <span class="value">27,319 <span class="text-muted small">(8%)</span></span>
                    <div class="bars">
                      <div class="progress progress-xs">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 8%" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </li>
                  <li class="divider text-center">
                    <button type="button" class="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="show more"><i class="icon-options"></i></button>
                  </li>
                </ul>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-4">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="callout">
                      <small class="text-muted">Malware</small><br>
                      <strong class="h4">23%</strong>
                    </div>
                  </div><!--/.col-->
                  <div class="col-sm-6">
                    <div class="callout callout-primary">
                      <small class="text-muted">Bounce Rate</small><br>
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
  }
}
</script>

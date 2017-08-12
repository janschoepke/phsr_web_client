<script>
import { Line } from 'vue-chartjs'

const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'
const brandWarning = '#f8cb00'

function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

export default Line.extend({
  props: ['data', 'data2', 'data3', 'data4'],
  mounted () {
    this.renderChart({
      labels: ['15-20', '21-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-50', '61-65', '66-70'],
      datasets: [
        {
          label: 'Age Distribution',
          backgroundColor: convertHex(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data
        },
        {
          label: 'Mail Openings',
          backgroundColor: 'transparent',
          borderColor: brandSuccess,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data2
        },
        {
          label: 'Link Clicks',
          backgroundColor: 'transparent',
          borderColor: brandDanger,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data3
        },
        {
          label: 'Conversions',
          backgroundColor: 'transparent',
          borderColor: brandWarning,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data4
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    })
  }
})
</script>

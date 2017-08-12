<script>
import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  props: ['labels', 'colors', 'data'],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#DD1B16',
            '#DD1B16',
            '#DD1B16'
          ],
          data: this.data
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
</script>

import { onMounted, ref, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { debounce } from './utils'

export function useChart(key: string, options: any) {
  let chart: echarts.EChartsType | null = null

  const resizeHandler = debounce(() => {
    if (chart) {
      chart.resize()
    }
  }, 100)

  onMounted(() => {
    chart = echarts.init(document.getElementById(key))
    chart.setOption(options || {})
    window.addEventListener('resize', resizeHandler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  return { chart }
}

export function useChartOptions() {
  // todo bar

  // todo area line 

  // todo line

  // todo pie

  // todo doughnut pie  
}
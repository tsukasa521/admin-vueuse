import { onMounted, ref, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { debounce } from './utils'

export interface ChartTitle {
  text: string
}

export type ChartColor = string[]

export interface ChartTooltip {
  trigger: string | 'item'
}

export interface ChartLegend {
  top: String | 'bottom'
}

/**
 * category轴、value轴
 */
export type axis = {
  type: string | 'category' | 'value',
  data?: string[],
  axisLabel?: {
    formatter?: (value: string) => string | string
  }
}

/**
 * 用户输入的表格数据
 */
export type tableData = {
  name:string,
  rows: string[]
}

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
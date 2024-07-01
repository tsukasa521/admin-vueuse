import { onMounted, ref, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { debounce } from './utils'

export interface ChartTitle {
  text: string,
}

export type ChartColor = string[]

export interface ChartTooltip {
  trigger: "item" | string
}

export interface ChartLegend {
  top: 'bottom' | string
}

/**
 * category轴、value轴
 */
export type ChartAxis = {
  type: 'category' | 'value' | string
  data?: string[],
  axisLabel?: {
    formatter?: (value: string) => string | string
  }
}

/**
 * 用户输入的表格数据
 */
export type SeriesRow = {
  name: string,
  data: string[] | number[]
}

export interface ChartOptions {
  title?: string, // 标题
  legend?: boolean, // 是否显示图例
  categories: string[], // x轴内容
  series: SeriesRow[], // y轴内容
  isXYAxisReverse?: boolean // 是否反转x轴和y轴
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

/**
 * todo 可以放一些全局入参
 */
export function useChartOptions() {
  // todo bar
  const generateBarChartOptions = (options: ChartOptions) => {
    const { categories, series, isXYAxisReverse } = options
    const xAxis: ChartAxis = {
      type: 'category',
      data: categories
    }
    const yAxis: ChartAxis = {
      type: 'value'
    }

    const title: ChartTitle | null = options.title ? { text: options.title } : null;

    const tooltip: ChartTooltip = { trigger: 'item' };

    const legend: ChartLegend | null = { top: 'bottom' };

    return {
      title,
      tooltip,
      legend,
      xAxis: isXYAxisReverse ? yAxis : xAxis,
      yAxis: isXYAxisReverse ? xAxis : yAxis,
      series: series.map((row: SeriesRow) => {
        return {
          name: row.name,
          type: 'bar',
          data: row.data
        }
      })
    }
  }


  // todo area line 

  // todo line
  const generateLineChartOptions = (options: ChartOptions) => {
    const { categories, series, isXYAxisReverse } = options
    const xAxis: ChartAxis = {
      type: 'category',
      data: categories
    }
    const yAxis: ChartAxis = {
      type: 'value'
    }

    const title: ChartTitle | null = options.title ? { text: options.title } : null;

    return {
      title,
      xAxis: isXYAxisReverse ? yAxis : xAxis,
      yAxis: isXYAxisReverse ? xAxis : yAxis,
      series: series.map((row: SeriesRow) => {
        return {
          name: row.name,
          type: 'bar',
          data: row.data
        }
      })
    }
  }

  // todo pie

  // todo doughnut pie  

  return {
    generateBarChartOptions,
    generateLineChartOptions
  }
}
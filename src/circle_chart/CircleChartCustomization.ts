export type TTitlePosition = 'top' | 'bottom' | 'left' | 'right'

export function getTitlePositionClass(titlePosition?: TTitlePosition) {
  if (titlePosition === 'top') {
    return 'chart-title-top'
  } else if (titlePosition === 'bottom') {
    return 'chart-title-bottom'
  } else if (titlePosition === 'left') {
    return 'chart-title-left'
  } else if (titlePosition === 'right') {
    return 'chart-title-right'
  }

  return 'chart-title-bottom'
}

export function getChartStyle(
  valueInPercent: number,
  thickness?: number,
  faceColor?: string,
  backColor?: string,
  chartStartDegree?: number,
  chartEndDegree?: number
) {
  if (!chartStartDegree) {
    chartStartDegree = 0
  }

  const chartStyle: any = {
    '--face-color': faceColor || 'orange',
    '--back-color': backColor || 'lightgray',
    '--thickness': thickness ? thickness + 'px' : '10px',
    '--rotation-degree': chartStartDegree + 'deg',
  }

  chartStyle['--value-percent'] = valueInPercent + '%'

  if (chartEndDegree) {
    chartStyle['--full-circle-part'] = Math.abs((chartEndDegree - chartStartDegree) / 360)
  }

  return chartStyle
}

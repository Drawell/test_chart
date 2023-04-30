import React from 'react'
import './CircleChart.css'
import {
  getChartStyle,
  getTitlePositionClass,
  TTitlePosition,
} from './CircleChartCustomization'

interface ICircleChartProps extends React.PropsWithChildren {
  valueInPercent: number
  size?: string
  thickness?: number
  faceColor?: string
  backColor?: string

  chartStartDegree?: number
  chartEndDegree?: number

  title?: string
  titlePosition?: TTitlePosition
  titleStyle?: React.CSSProperties
}

const CircleChart: React.FC<ICircleChartProps> = ({
  valueInPercent,
  size,
  thickness,
  faceColor,
  backColor,
  chartStartDegree,
  chartEndDegree,
  title,
  titlePosition,
  titleStyle,
  children,
}) => {
  return (
    <div
      className='chart-container'
      style={{ '--width': size || '100px' } as React.CSSProperties}
    >
      <div
        className='circle-chart'
        style={
          getChartStyle(
            valueInPercent,
            thickness,
            faceColor,
            backColor,
            chartStartDegree,
            chartEndDegree
          ) as React.CSSProperties
        }
      />
      <div className='chart-children'>{children}</div>

      {title && (
        <div
          className={'chart-title ' + getTitlePositionClass(titlePosition)}
          style={titleStyle}
        >
          {title}
        </div>
      )}
    </div>
  )
}
export default CircleChart

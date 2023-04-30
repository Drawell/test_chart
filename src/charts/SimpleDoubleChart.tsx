import React, { useState } from 'react'
import CircleChart from '../circle_chart/CircleChart'
import { IModel } from '../IDataModel'
import InfoPanel from '../info_panel/InfoPanel'
import './Charts.css'
import { getPercents } from './ChartsUtils'

interface ISimpleDoubleChartProps {
  first: IModel
  second: IModel
}

const SimpleDoubleChart: React.FC<ISimpleDoubleChartProps> = ({ first, second }) => {
  const [showPanel, setShowPanel] = useState(false)

  const handleHover = () => {
    setShowPanel(true)
  }

  const handleBlur = () => {
    setShowPanel(false)
  }

  return (
    <div className='chart' onMouseEnter={handleHover} onMouseLeave={handleBlur}>
      <CircleChart
        valueInPercent={getPercents(second.value, second.total)}
        size='160px'
        thickness={5}
        chartStartDegree={0}
        chartEndDegree={270}
        faceColor='#b1b1b1'
        backColor='#cfcfcf'
        title={getPercents(second.value, second.total) + '%'}
        titlePosition='right'
      >
        <CircleChart
          valueInPercent={getPercents(first.value, first.total)}
          size='130px'
          thickness={25}
          chartStartDegree={0}
          chartEndDegree={270}
          faceColor='#ff7e00'
          backColor='#cfcfcf'
        >
          <span className='chart-inside-percent'>
            {getPercents(first.value, first.total)}
          </span>
          <span>%</span>
        </CircleChart>
      </CircleChart>

      {showPanel && (
        <div className='info-panel-container-right'>
          <InfoPanel data={[first, second]} />
        </div>
      )}
    </div>
  )
}
export default SimpleDoubleChart

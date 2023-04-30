import React, { useState } from 'react'
import CircleChart from '../circle_chart/CircleChart'
import { IModel } from '../IDataModel'
import InfoPanel from '../info_panel/InfoPanel'
import './Charts.css'
import { getPercents } from './ChartsUtils'

type TPanelPosition = 'left' | 'right'

function getTitlePosition(showPanel: boolean, panelPosition: TPanelPosition) {
  if (!showPanel) {
    return 'bottom'
  } else if (panelPosition === 'left') {
    return 'left'
  } else if (panelPosition === 'right') {
    return 'right'
  }
}

function getPanelPositionClass(panelPosition: TPanelPosition) {
  if (panelPosition === 'left') {
    return 'info-panel-container-left'
  } else if (panelPosition === 'right') {
    return 'info-panel-container-right'
  }
}

interface IFullCircleDoubleChartProps {
  first: IModel
  second: IModel
  panelPosition: TPanelPosition
}

const FullCircleDoubleChart: React.FC<IFullCircleDoubleChartProps> = ({
  first,
  second,
  panelPosition,
}) => {
  const [chartStartDeg, setChartStartDeg] = useState(0)
  const [chartEndDeg, setChartEndDeg] = useState(360)
  const [showPanel, setShowPanel] = useState(false)

  const handleHover = () => {
    setShowPanel(true)
    if (panelPosition === 'right') {
      setChartStartDeg(0)
      setChartEndDeg(270)
    } else {
      setChartStartDeg(90)
      setChartEndDeg(360)
    }
  }

  const handleBlur = () => {
    setShowPanel(false)
    setChartStartDeg(0)
    setChartEndDeg(360)
  }

  return (
    <div className='chart' onMouseEnter={handleHover} onMouseLeave={handleBlur}>
      <CircleChart
        valueInPercent={getPercents(first.value, first.total)}
        size='160px'
        thickness={5}
        chartStartDegree={chartStartDeg}
        chartEndDegree={chartEndDeg}
        faceColor='blue'
        backColor='lightblue'
        title={getPercents(first.value, first.total) + '%'}
        titlePosition={getTitlePosition(showPanel, panelPosition)}
      >
        <CircleChart
          valueInPercent={getPercents(second.value, second.total)}
          size='130px'
          thickness={25}
          chartStartDegree={chartStartDeg}
          chartEndDegree={chartEndDeg}
          faceColor='red'
          backColor='lightgray'
        >
          <span className='chart-inside-percent'>
            {getPercents(second.value, second.total)}
          </span>
          <span>%</span>
        </CircleChart>
      </CircleChart>

      {showPanel && (
        <div className={getPanelPositionClass(panelPosition)}>
          <InfoPanel data={[first, second]} />
        </div>
      )}
    </div>
  )
}
export default FullCircleDoubleChart

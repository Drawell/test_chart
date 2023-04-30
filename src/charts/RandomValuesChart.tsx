import React, { useEffect, useState } from 'react'
import CircleChart from '../circle_chart/CircleChart'
import { IModel } from '../IDataModel'
import InfoPanel from '../info_panel/InfoPanel'
import { getPercents } from './ChartsUtils'

const initData: IModel[] = [
  {
    title: 'Первый',
    value: 10,
    total: 100,
  },
  {
    title: 'Второй',
    value: 30,
    total: 100,
  },
  {
    title: 'Третий',
    value: 60,
    total: 100,
  },
]

const RandomDataChart: React.FC = () => {
  const [data, setData] = useState<IModel[]>(initData)
  const [chartEndDeg, setChartEndDeg] = useState(360)
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      data.forEach((item) => {
        let change = Math.round((Math.random() - 0.5) * 10)
        item.value = Math.max(0, Math.min(100, item.value + change))
      })
      setData([...data])
    }, 1000)

    return () => {
      clearInterval(timeout)
    }
  }, [data])

  const handleHover = () => {
    setShowPanel(true)
    setChartEndDeg(270)
  }

  const handleBlur = () => {
    setShowPanel(false)
    setChartEndDeg(360)
  }

  return (
    <div className='chart' onMouseEnter={handleHover} onMouseLeave={handleBlur}>
      <CircleChart
        valueInPercent={getPercents(data[2].value, data[2].total)}
        size='240px'
        chartEndDegree={255}
        faceColor='blue'
        backColor='lightblue'
        title={getPercents(data[2].value, data[2].total) + '%'}
        titlePosition='right'
        titleStyle={{ left: '80%' }}
      >
        <CircleChart
          valueInPercent={getPercents(data[1].value, data[1].total)}
          size='185px'
          chartEndDegree={250}
          faceColor='green'
          backColor='lightgreen'
          title={getPercents(data[1].value, data[1].total) + '%'}
          titlePosition='right'
          titleStyle={{ left: '70%' }}
        >
          <CircleChart
            valueInPercent={getPercents(data[0].value, data[0].total)}
            size='130px'
            chartEndDegree={chartEndDeg}
            faceColor='red'
            backColor='lightpink'
          >
            <span className='chart-inside-percent'>
              {getPercents(data[0].value, data[0].total)}
            </span>
            <span>%</span>
          </CircleChart>
        </CircleChart>
      </CircleChart>

      {showPanel && (
        <div className='info-panel-container-right'>
          <InfoPanel data={data} />
        </div>
      )}
    </div>
  )
}
export default RandomDataChart

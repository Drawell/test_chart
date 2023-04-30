import React from 'react'
import './App.css'
import FullCircleDoubleChart from './charts/FullCircleDoubleChart'
import RandomDataChart from './charts/RandomValuesChart'
import SimpleDoubleChart from './charts/SimpleDoubleChart'
import { IModel } from './IDataModel'

const chartData: IModel[] = [
  {
    title: 'НИТ',
    value: 234840,
    total: 246051,
  },
  {
    title: 'Прогноз',
    value: 272289,
    total: 283500,
  },
  {
    title: 'Пятьдесят',
    value: 50,
    total: 100,
  },
  {
    title: 'Шестьдесят',
    value: 60,
    total: 100,
  },
]

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <SimpleDoubleChart first={chartData[0]} second={chartData[1]} />

        <div className='sub-container'>
          <FullCircleDoubleChart
            first={chartData[2]}
            second={chartData[3]}
            panelPosition='left'
          />
          <FullCircleDoubleChart
            first={chartData[2]}
            second={chartData[3]}
            panelPosition='right'
          />
        </div>

        <RandomDataChart />
      </div>
    </div>
  )
}

export default App

import React from 'react'
import { IModel } from '../IDataModel'

function numberWithSpaces(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

interface IInfoPanelItemProps {
  item: IModel
}

const InfoPanelItem: React.FC<IInfoPanelItemProps> = ({ item }) => {
  return (
    <div>
      <span className='info-panel-title'>{item.title.toUpperCase()}</span>
      <div className='no-wrap'>
        <span className='info-panel-value'>{numberWithSpaces(item.value)}</span>
        <span className='info-panel-total'> / {numberWithSpaces(item.total)}</span>
      </div>
    </div>
  )
}
export default InfoPanelItem

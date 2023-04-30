import React from 'react'
import { IModel } from '../IDataModel'
import './InfoPanel.css'
import InfoPanelItem from './InfoPanelItem'

interface IInfoPanelProps {
  data: IModel[]
  emptyMessage?: string
}

const InfoPanel: React.FC<IInfoPanelProps> = ({ data, emptyMessage }) => {
  return (
    <div className='info-panel'>
      {!data.length ? (
        <>{emptyMessage || 'Нет данных'}</>
      ) : (
        data.map((item) => <InfoPanelItem key={item.title} item={item} />)
      )}
    </div>
  )
}
export default InfoPanel

import React from 'react'
import { useTranslateDate } from '../../hooks/useTranslateDate';
import './forecastItem.scss';

export default function ForecastItem(props: { data: any, date: any, index: number, system: string }) {
  const { translate } = useTranslateDate();

  return (
    <div className='forecastItem_component'>
      <div className="day">
        {props.index !== 0 && translate(new Date(props.date).getDay())}
        {props.index === 0 && 'Today'}
      </div>
      <div className="image-precipitation">
        <img src={props.data.condition.icon} alt="" />
        <div className="precipitationPercentage">{props.data.daily_chance_of_rain}%</div>
      </div>
      <div className="temperature">
        {props.system === 'metric' && <span className="min">{props.data.mintemp_c}°C</span>}
        {props.system === 'imperial' && <span className="min">{props.data.mintemp_f}°F</span>}
        <div className="indicator"></div>
        {props.system === 'metric' && <span className="max">{props.data.maxtemp_c}°C</span>}
        {props.system === 'imperial' && <span className="max">{props.data.maxtemp_f}°F</span>}
      </div>
    </div>
  )
}

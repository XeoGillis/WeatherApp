import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './todayForecastTile.scss';

export default function TodayForecastTile(props: { data: any, system: string }) {
  const now = new Date();

  return (
    <section className='todayForecastTile_component tile'>
      <h1><FontAwesomeIcon icon={faClock} /> Hourly Forecast</h1>
      <div className="content">
        {props.data.forecast.forecastday[0].hour.map((forecastData: any) => {
          const time = new Date(forecastData.time).getHours();

          return (
            <span key={forecastData.time} className='forecast-item'>
              {now.getHours() === time &&
                <span className='time'>Now</span>
              }
              {now.getHours() !== time &&
                <span className='time'>{time}:00</span>
              }
              <img src={forecastData.condition.icon} alt='icon' />
              {props.system === 'metric' &&
                <div className="temp">{forecastData.temp_c}°C</div>
              }
              {props.system === 'imperial' &&
                <div className="temp">{forecastData.temp_f}°F</div>
              }
              <div className="precipitation">{forecastData.chance_of_rain}%</div>
            </span>
          )
        })}
      </div>
    </section >
  )
}

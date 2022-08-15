import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './todayForecastTile.scss';

export default function TodayForecastTile(props: { data: any }) {
  const now = new Date();

  return (
    <section className='todayForecastTile_component tile'>
      <h1><FontAwesomeIcon icon={faClock} /> Hourly Forecast</h1>
      <div className="forecast-list">

        {props.data.forecast.forecastday[0].hour.map((forecastData: any) => {
          const time = new Date(forecastData.time).getHours();

          return (
            <span key={forecastData.time} className='forecast-item'>
              {now.getHours() === time &&
                <span>Now</span>
              }
              {now.getHours() !== time &&
                <span>{time}:00</span>
              }
              <img src={forecastData.condition.icon} alt='icon' />
              <div className="temp">{forecastData.temp_c}°C</div>
              <div className="precipitation">{forecastData.chance_of_rain}%</div>
            </span>
          )
        })}
      </div>
    </section>
  )
}

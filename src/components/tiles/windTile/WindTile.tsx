import { faArrowDown, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './windTile.scss'

export default function WindTile(props: { data: any }) {
  return (
    <section className='windTile_component tile'>
      <h1><FontAwesomeIcon icon={faWind} /> Wind</h1>


      {/* <div className="content"> */}
      <div className="direction">{props.data.current.wind_kph} km/h</div>
      <div className="arrowContainer" style={{ transform: `rotate(${props.data.current.wind_degree}deg)` }}>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
      <div className="direction">
        {props.data.current.wind_dir}: {props.data.current.wind_degree}°
      </div>
      <div className="max-min">
        <span>max: {props.data.forecast.forecastday[0].day.maxwind_kph} km/h</span>
      </div>
      {/* </div> */}
    </section >
  )
}

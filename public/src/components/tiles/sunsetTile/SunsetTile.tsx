import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SunsetTile(props: { data: any }) {
  return (
    <section className='sunsetTile_component tile'>
      <h1><FontAwesomeIcon icon={faSun} /> Sunset</h1>
      <div className="container">
        <div className="sunrise">
          <FontAwesomeIcon icon={faSun} />
          {props.data.forecast.forecastday[0].astro.sunrise}
        </div>

        <div className="sunset">
          <FontAwesomeIcon icon={faMoon} />
          {props.data.forecast.forecastday[0].astro.sunset}
        </div>
      </div>
    </section>
  )
}

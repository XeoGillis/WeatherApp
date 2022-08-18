import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FeelsLikeTile(props: { data: any, system: string }) {
  return (
    <section className='precipitationTile_component tile'>
      <h1><FontAwesomeIcon icon={faTemperatureHalf} /> Feels like</h1>
      {props.system === 'metric' &&
        <div className="container">{props.data.current.feelslike_c} °C</div>
      }

      {props.system === 'imperial' &&
        <div className="container">{props.data.current.feelslike_f} °F</div>
      }
    </section >
  )
}

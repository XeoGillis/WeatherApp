import { faTemperatureUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PressureTile(props: { data: any }) {
  return (
    <section className='pressureTile_component tile'>
      <h1><FontAwesomeIcon icon={faTemperatureUp} /> Pressure</h1>
      <div className="container">
        <div>{props.data.current.pressure_mb} hPa</div>
      </div>
    </section>
  )
}

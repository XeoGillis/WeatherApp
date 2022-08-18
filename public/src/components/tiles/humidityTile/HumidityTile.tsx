import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function HumidityTile(props: { data: any }) {
  return (
    <section className='humidityTile_component tile'>
      <h1><FontAwesomeIcon icon={faDroplet} /> Humidity</h1>
      <div className="container"><span>{props.data.current.humidity} %</span></div>
    </section>
  )
}

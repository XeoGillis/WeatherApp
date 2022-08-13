import React from 'react'

export default function HumidityTile(props: { data: any }) {
  return (
    <section className='humidityTile_component tile'>
      <h3>Humidity</h3>
      <span>{props.data.current.humidity} %</span>
    </section>
  )
}

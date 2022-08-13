import React from 'react'

export default function PressureTile(props: { data: any }) {
  return (
    <section className='pressureTile_component tile'>
      <h3>Pressure</h3>
      <br />
      <div>{props.data.current.pressure_mb} hPa</div>
    </section>
  )
}

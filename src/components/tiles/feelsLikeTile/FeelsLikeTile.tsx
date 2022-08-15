import React from 'react'

export default function FeelsLikeTile(props: { data: any }) {
  return (
    <section className='precipitationTile_component tile'>
      <h3>Feels like</h3>
      {props.data.current.feelslike_c} °C
    </section>
  )
}

import React from 'react'

export default function VisibilityTile(props: { data: any }) {
  return (
    <section className='visibilityTile_component tile'>
      <h3>Visibility</h3>
      <span>{props.data.current.vis_km} km</span>
    </section>
  )
}

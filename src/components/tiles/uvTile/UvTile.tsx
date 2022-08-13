import React from 'react'

export default function UvTile(props: { data: any }) {
  return (
    <section className='uvTile_component tile'>
      Uv index
      <div>
        {props.data.current.uv}
      </div>
    </section>
  )
}

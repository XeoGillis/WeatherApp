import { faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './uvTile.scss'

export default function UvTile(props: { data: any }) {
  return (
    <section className='uvTile_component tile'>
      <h1><FontAwesomeIcon icon={faSun} /> Uv index</h1>
      <div className='container'>
        {props.data.current.uv}
      </div>
    </section>
  )
}

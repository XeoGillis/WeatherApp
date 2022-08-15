import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PrecipitationTile(props: { data: any }) {
  return (
    <section className='precipitationTile_component tile'>
      <h3>Precipitation</h3>
      <FontAwesomeIcon icon={faCloudRain} />
      {props.data.current.precip_mm} mm
    </section>
  )
}

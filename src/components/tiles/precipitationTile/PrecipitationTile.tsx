import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PrecipitationTile(props: { data: any, system: string }) {
  return (
    <section className='precipitationTile_component tile'>
      <h1><FontAwesomeIcon icon={faCloudRain} /> Precipitation</h1>
      <div className="container">
        {props.system === 'metric' &&
          <>
            {props.data.current.precip_mm} mm
          </>
        }

        {props.system === 'imperial' &&
          <>
            {props.data.current.precip_in} inches
          </>
        }
      </div>
    </section>
  )
}

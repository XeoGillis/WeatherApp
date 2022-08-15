import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function VisibilityTile(props: { data: any, system: string }) {
  return (
    <section className='visibilityTile_component tile'>
      <h1><FontAwesomeIcon icon={faEye} /> Visibility</h1>
      <div className="container">
        {props.system === 'metric' &&
          <>
            <span>{props.data.current.vis_km} km</span>
            <div>Avg {props.data.forecast.forecastday[0].day.avgvis_km} km</div>
          </>
        }

        {props.system === 'imperial' &&
          <>
            <span>{props.data.current.vis_miles} mi</span>
            <div>Avg {props.data.forecast.forecastday[0].day.avgvis_miles} mi</div>
          </>
        }
      </div>
    </section>
  )
}

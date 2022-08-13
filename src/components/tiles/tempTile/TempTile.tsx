import React from 'react'
import './tempTile.scss'

export default function TempTile(props: { data: any }) {

  return (
    <>
      {props.data !== undefined &&
        <>
          <section className="tempTile_component tile">
            <div className="location">{props.data.location.name}</div>
            <img src={props.data.current.condition.icon} alt="" />
            <div className="temp">{props.data.current.temp_c} °C</div>
            <div className="condition">{props.data.current.condition.text}</div>
            <div className="high-low">
              <span>H:{props.data.forecast.forecastday[0].day.maxtemp_c}</span>
              <span>L:{props.data.forecast.forecastday[0].day.mintemp_c}</span>
            </div>
          </section>
        </>
      }
    </>
  )
}

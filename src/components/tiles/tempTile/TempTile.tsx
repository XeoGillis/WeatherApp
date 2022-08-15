import React from 'react'
import './tempTile.scss'

export default function TempTile(props: { data: any, system: string }) {

  return (
    <>
      {props.data !== undefined &&
        <>
          <section className="tempTile_component tile">
            <div className="container">
              <div className="location">{props.data.location.name}</div>
              <img src={props.data.current.condition.icon} alt="" />
              {props.system === 'metric' &&
                <div className="temp">{props.data.current.temp_c} °C</div>
              }
              {props.system === 'imperial' &&
                <div className="temp">{props.data.current.temp_f} °F</div>
              }

              <div className="condition">{props.data.current.condition.text}</div>
              <div className="high-low">
                {props.system === 'metric' &&
                  <>
                    <span>H:{props.data.forecast.forecastday[0].day.maxtemp_c}</span>
                    <span>L:{props.data.forecast.forecastday[0].day.mintemp_c}</span>
                  </>
                }
                {props.system === 'imperial' &&
                  <>
                    <span>H:{props.data.forecast.forecastday[0].day.maxtemp_f}</span>
                    <span>L:{props.data.forecast.forecastday[0].day.mintemp_f}</span>
                  </>
                }
              </div>
            </div>
          </section>
        </>
      }
    </>
  )
}

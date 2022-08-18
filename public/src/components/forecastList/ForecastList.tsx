import React from 'react'
import ForecastItem from '../forecastItem/ForecastItem';

export default function ForecastList(props: { data: any, system: string }) {
  return (
    <div>
      {props.data.forecast.forecastday.map((day: any, index: number) => {
        return (
          <ForecastItem
            key={day.date}
            data={day.day}
            date={day.date}
            index={index}
            system={props.system}
          />);
      })}
    </div>
  )
}

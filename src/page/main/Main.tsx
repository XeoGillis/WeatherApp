import React, { useContext } from 'react'
import SimpleInfo from '../../components/simpleInfo/SimpleInfo'
import { WeatherContext } from '../../contexts/WeatherProvider';

export default function Main() {

  const { data, loading, error, getWeatherInfo } = useContext(WeatherContext);
  getWeatherInfo();


  return (
    <>
      <SimpleInfo
        data={data}
      />
    </>
  )
}

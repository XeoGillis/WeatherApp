import React, { useContext, useEffect, useState } from 'react'
import ForecastList from '../../components/forecastList/ForecastList';
import Navbar from '../../components/navbar/Navbar'
import Spinner from '../../components/util/spinner/Spinner';
import config from '../../config.json'
import { WeatherContext } from '../../contexts/WeatherProvider';

export default function Week() {
  const [minLoading, setMinLoading] = useState(true);
  const { forecastData, loading, error, getWeatherForecast, system } = useContext(WeatherContext);

  useEffect(() => {
    getWeatherForecast(7);
  }, [getWeatherForecast])

  //* Min loading 
  setTimeout(() => {
    setMinLoading(false);
  }, parseInt(config.min_loading));

  return (
    <>
      <Navbar />
      <main className='week_page'>
        {(!loading && !minLoading) &&
          <>
            <ForecastList
              data={forecastData}
              system={system}
            />
          </>
        }
        {(loading || minLoading) &&
          <Spinner />
        }
      </main>
    </>
  )
}

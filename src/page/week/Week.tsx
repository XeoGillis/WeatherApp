import React, { useContext, useEffect, useState } from 'react'
import ForecastList from '../../components/forecastList/ForecastList';
import Navbar from '../../components/navbar/Navbar'
import Spinner from '../../components/util/spinner/Spinner';
import config from '../../config.json'
import { WeatherContext } from '../../contexts/WeatherProvider';
import Notification from '../../components/util/notification/Notification';
import { useNotification } from '../../hooks/useNotification';

export default function Week() {
  const [minLoading, setMinLoading] = useState(true);
  const { forecastData, loading, error, getWeatherForecast, system } = useContext(WeatherContext);
  const { triggerNotification, payload } = useNotification(true);

  useEffect(() => {
    getWeatherForecast(7);
  }, [getWeatherForecast])

  //* Min loading 
  setTimeout(() => {
    setMinLoading(false);
  }, parseInt(config.min_loading));

  useEffect(() => {
    if (error === undefined || error === '') return;
    triggerNotification(error.message, 0);
  }, [error, triggerNotification]);

  return (
    <>
      <Navbar />
      <Notification {...payload} />
      <main className='week_page'>
        {(!error) &&
          <>
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
          </>
        }
      </main>
    </>
  )
}

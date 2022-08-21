import React, { useContext, useEffect, useState } from 'react'
import ForecastList from '../../components/forecastList/ForecastList';
import Navbar from '../../components/navbar/Navbar'
<<<<<<< HEAD
import Spinner from '../../components/util/spinner/Spinner';
import config from '../../config.json'
import { WeatherContext } from '../../contexts/WeatherProvider';
=======
import Notification from '../../components/util/notification/Notification';
import Spinner from '../../components/util/spinner/Spinner';
import config from '../../config.json'
import { WeatherContext } from '../../contexts/WeatherProvider';
import { useNotification } from '../../hooks/useNotification';
>>>>>>> bf2c84d (updated readme and added error handling)

export default function Week() {
  const [minLoading, setMinLoading] = useState(true);
  const { forecastData, loading, error, getWeatherForecast, system } = useContext(WeatherContext);
<<<<<<< HEAD
=======
  const { triggerNotification, payload } = useNotification(true);
>>>>>>> bf2c84d (updated readme and added error handling)

  useEffect(() => {
    getWeatherForecast(7);
  }, [getWeatherForecast])

  //* Min loading 
  setTimeout(() => {
    setMinLoading(false);
  }, parseInt(config.min_loading));

<<<<<<< HEAD
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
=======
  useEffect(() => {
    if (error === undefined) return;
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
>>>>>>> bf2c84d (updated readme and added error handling)
      </main>
    </>
  )
}

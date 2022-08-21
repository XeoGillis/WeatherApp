import React, { useContext, useEffect, useState } from 'react'
import TempTile from '../../components/tiles/tempTile/TempTile';
import { WeatherContext } from '../../contexts/WeatherProvider';
import config from '../../config.json'
import Spinner from '../../components/util/spinner/Spinner';
import './main.scss'
import WindTile from '../../components/tiles/windTile/WindTile';
import UvTile from '../../components/tiles/uvTile/UvTile';
import PressureTile from '../../components/tiles/pressureTile/PressureTile';
import HumidityTile from '../../components/tiles/humidityTile/HumidityTile';
import VisibilityTile from '../../components/tiles/visibilityTile/VisibilityTile';
import Navbar from '../../components/navbar/Navbar';
import PrecipitationTile from '../../components/tiles/precipitationTile/PrecipitationTile';
import FeelsLikeTile from '../../components/tiles/feelsLikeTile/FeelsLikeTile';
import TodayForecastTile from '../../components/tiles/todayForecastTile/TodayForecastTile';
import SunsetTile from '../../components/tiles/sunsetTile/SunsetTile';
import { useNotification } from '../../hooks/useNotification';
import Notification from '../../components/util/notification/Notification';

export default function Main() {
  const [minLoading, setMinLoading] = useState(true);
  const { data, loading, error, getWeatherInfo, system } = useContext(WeatherContext);
  const { triggerNotification, payload } = useNotification(true);

  useEffect(() => {
    getWeatherInfo();
  }, [getWeatherInfo]);

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
      <main className='main_page'>
        {(!error) &&
          <>
            {(!loading && !minLoading) &&
              <>
                <TempTile
                  data={data}
                  system={system}
                />
                <TodayForecastTile
                  data={data}
                  system={system}
                />
                <WindTile
                  data={data}
                  system={system}
                />
                <SunsetTile
                  data={data}
                />
                <UvTile
                  data={data}
                />
                <PressureTile
                  data={data}
                />
                <HumidityTile
                  data={data}
                />
                <VisibilityTile
                  data={data}
                  system={system}
                />
                <PrecipitationTile
                  data={data}
                  system={system}
                />
                <FeelsLikeTile
                  data={data}
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

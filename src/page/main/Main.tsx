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

export default function Main() {
  const [minLoading, setMinLoading] = useState(true);
  const { data, loading, error, getWeatherInfo } = useContext(WeatherContext);


  useEffect(() => {
    getWeatherInfo();
  }, [getWeatherInfo]);

  //* Min loading 
  setTimeout(() => {
    setMinLoading(false);
  }, parseInt(config.min_loading));

  return (
    <main className='main_page'>
      {(!loading && !minLoading) &&
        <>
          <TempTile
            data={data}
          />
          <WindTile
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
          />
        </>

      }

      {(loading || minLoading) &&
        <Spinner />
      }
    </main>
  )
}

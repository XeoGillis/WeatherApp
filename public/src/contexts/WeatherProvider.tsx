import React, { useCallback, useMemo, useState } from 'react'
// Apis
import * as weatherAPI from '../api/_current';
import * as forecastAPI from '../api/_forecast';

// Context 
export const WeatherContext = React.createContext<any>([]);

export default function WeatherProvider(props: { children: any }) {
  // States
  const [data, setData] = useState(undefined);
  const [forecastData, setForecastData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Options
  const [system, setSystem] = useState(localStorage.getItem('system') ? localStorage.getItem('system') : 'metric');

  const getWeatherInfo = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      setData((await weatherAPI.getCurrentWeatherViaIp()).data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getWeatherForecast = useCallback(async (days: number) => {
    try {
      setLoading(true);
      setError('');
      setForecastData((await forecastAPI.getForecastViaIp(days)).data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Changes the usage of the metric or imperial system
  const changeSystem = useCallback((value: string) => {
    setSystem(value);
    localStorage.setItem('system', value);
  }, []);

  // Provider values
  const values = useMemo(() => ({
    data, loading, error, getWeatherInfo, system, changeSystem, getWeatherForecast, forecastData
  }), [data, loading, error, getWeatherInfo, system, changeSystem, getWeatherForecast, forecastData]);

  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  )
}

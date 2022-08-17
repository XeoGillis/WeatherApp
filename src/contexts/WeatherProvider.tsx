import React, { useCallback, useMemo, useState } from 'react'
// Api
import * as weatherAPI from '../api/_current';

// Context 
export const WeatherContext = React.createContext<any>([]);

export default function WeatherProvider(props: { children: any }) {
  // States
  const [data, setData] = useState(undefined);
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

  // Changes the usage of the metric or imperial system
  const changeSystem = useCallback((value: string) => {
    setSystem(value);
    localStorage.setItem('system', value);
  }, []);

  // Provider values
  const values = useMemo(() => ({
    data, loading, error, getWeatherInfo, system, changeSystem
  }), [changeSystem, data, error, getWeatherInfo, loading, system]);

  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  )
}

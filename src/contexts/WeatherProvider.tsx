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
  const [language, setLanguage] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'nl');

  const getWeatherInfo = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      if (language === '') {
        setData((await weatherAPI.getCurrentWeatherViaIp()).data);
      } else {
        setData((await weatherAPI.getCurrentWeatherViaIpDutch()).data);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [language]);

  // Changes the language of the app
  const changeLang = useCallback((value: string) => {
    setLanguage(value);
    localStorage.setItem('lang', value);
  }, []);

  // Changes the usage of the metric or imperial system
  const changeSystem = useCallback((value: string) => {
    setSystem(value);
    localStorage.setItem('system', value);
  }, []);

  // Provider values
  const values = useMemo(() => ({
    data, loading, error, getWeatherInfo, language, changeLang, system, changeSystem
  }), [changeLang, changeSystem, data, error, getWeatherInfo, language, loading, system]);

  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  )
}

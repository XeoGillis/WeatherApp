import React, { useCallback, useMemo, useState } from 'react'

//TODO:
import dataset from '../mockdata.json';

// Context 
export const WeatherContext = React.createContext<any>([]);

export default function WeatherProvider(props: { children: any }) {
  // States
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //TODO: temporary 
  const getWeatherInfo = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      setData(dataset);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);


  // Provider values
  const values = useMemo(() => ({
    data, loading, error, getWeatherInfo
  }), [data, error, getWeatherInfo, loading]);

  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  )
}

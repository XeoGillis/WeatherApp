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
  // const [location, setLocation]: any = useState(undefined);

  // const getLocation = useCallback(async () => {
  //   console.log('location');
  //   if (navigator.geolocation) {
  //     await navigator.geolocation.getCurrentPosition((location: any) => {
  //       return [location.coords.latitude, location.coords.longitude];
  //     });
  //   } else {
  //     return false;
  //   }
  // }, []);

  const getWeatherInfo = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      // if (location === undefined) {
      //   return;
      // } else
      //   if (!location) {
      setData((await weatherAPI.getCurrentWeatherViaIp()).data);
      // } else {
      //   setData((await weatherAPI.getCurrentWeather(location)).data);
      // }
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

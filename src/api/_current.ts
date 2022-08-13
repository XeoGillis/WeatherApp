import { axios } from '.';
import config from '../config.json';

export const getCurrentWeather = async (location: [Number, Number]) => {
  return await axios.get(`forecast.json?key=${config.api_key}&q=${location[0]},${location[1]}&alerts=yes`);
}

export const getCurrentWeatherViaIp = async () => {
  return await axios.get(`forecast.json?key=${config.api_key}&q=auto:ip`);
}
import { axios } from '.';
import config from '../config.json';

export const getCurrentWeatherViaIp = async () => {
  return await axios.get(`forecast.json?key=${config.api_key}&q=auto:ip`);
}

export const getCurrentWeatherViaIpDutch = async () => {
  return await axios.get(`forecast.json?key=${config.api_key}&q=auto:ip&lang=nl`);
}
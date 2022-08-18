import { axios } from '.';
import config from '../config.json';

export const getForecastViaIp = async (days: number) => {
  return await axios.get(`forecast.json?key=${config.api_key}&q=auto:ip&days=${days}`);
}
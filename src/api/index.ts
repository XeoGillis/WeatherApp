import axiosRoot from "axios";
import config from '../config.json';

export const axios = axiosRoot.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL || config.api_base_url
});


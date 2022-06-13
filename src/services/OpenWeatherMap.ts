import axios from 'axios';
import { getUrlBuilder } from 'helpers/buildUrl';

const BASE_URL = 'https://api.openweathermap.org/';

const axiosInstance = axios.create({
  baseURL: 'BASE_URL',
});

const buildUrl = getUrlBuilder(BASE_URL);

export const OpenWeatherMapService = {
  // https://openweathermap.org/api/geocoding-api
  getWeatherForCity: async (city: string) => {
    const resp = await axiosInstance.get(
      buildUrl('geo/1.0/direct', {
        q: city,
        limit: '3',
        appid: process.env['REACT_APP_OPENWEATHERMAP_API_KEY'] as string,
      })
    );
    return resp.data;
  },
  getCityNameByCoordinates: async (lat: number, lon: number) => {
    const resp = await axiosInstance.get(
      buildUrl('geo/1.0/reverse', {
        lat: String(lat),
        lon: String(lon),
        limit: '1',
        appid: process.env['REACT_APP_OPENWEATHERMAP_API_KEY'] as string,
      })
    );
    return resp.data;
  },
  // https://openweathermap.org/api/one-call-3#data
  getWeatherForCoordinates: async (lat: number, lon: number) => {
    const resp = await axiosInstance.get(
      buildUrl('data/2.5/onecall', {
        lat: String(lat),
        lon: String(lon),
        units: 'metric',
        appid: process.env['REACT_APP_OPENWEATHERMAP_API_KEY'] as string,
      })
    );
    return resp.data;
  },
};

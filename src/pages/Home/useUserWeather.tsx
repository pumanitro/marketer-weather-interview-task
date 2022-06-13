import { GeoLocation } from './useGeoLocation';
import { useEffect, useState } from 'react';
import { OpenWeatherMapService } from '../../services/OpenWeatherMap';

export const useUserWeather = (geoLocation: GeoLocation) => {
  // todo: define Weather type
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (!geoLocation) {
      return;
    }
    (async () => {
      const [weather, cityData] = await Promise.all([
        OpenWeatherMapService.getWeatherForCoordinates(geoLocation.lat, geoLocation.lng),
        OpenWeatherMapService.getCityNameByCoordinates(geoLocation.lat, geoLocation.lng),
      ]);
      setWeather({
        ...weather,
        cityName: cityData && cityData[0] && cityData[0].name,
      });
    })();
  }, [geoLocation]);

  return [weather];
};

import React, { FC } from 'react';
import { mapIconIdToSvg } from './mapIconIdToSvg';

export const CurrentWeather: FC<any> = ({ weather }) => {
  return (
    <div style={{ backgroundImage: `url(${mapIconIdToSvg('50d')})`, height: '150px' }}>
      {weather.cityName} {weather.current.temp} °C
    </div>
  );
};

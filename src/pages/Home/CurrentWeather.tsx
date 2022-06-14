import React, { FC } from 'react';
import styled from 'styled-components';
import { mapIconIdToSvg } from './mapIconIdToSvg';

const TemperatureText = styled.h2`
  font-size: 78px;
`;

const CurrentCityText = styled.h2`
  font-size: 42px;
`;

const CurrentWeatherWrapper = styled.div<any>`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => `url(${mapIconIdToSvg(props.weather.current.weather[0].icon)})`};
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CurrentWeather: FC<any> = ({ weather }) => {
  return (
    <CurrentWeatherWrapper weather={weather}>
      <CurrentCityText>{weather.cityName}</CurrentCityText>
      <TemperatureText>{Math.round(weather.current.temp)} °C</TemperatureText>
    </CurrentWeatherWrapper>
  );
};

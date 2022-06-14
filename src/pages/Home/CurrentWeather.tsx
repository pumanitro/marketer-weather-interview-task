import { media } from 'global/RWD';
import React, { FC } from 'react';
import styled from 'styled-components';
import { mapIconIdToSvg } from './mapIconIdToSvg';

const TemperatureText = styled.h2`
  ${media.xs`
    font-size: 39px;
  `}
  ${media.md`
    font-size: 58px;
  `}
  ${media.lg`
    font-size: 78px;
  `}
`;

const CurrentCityText = styled.h2`
  ${media.xs`
    font-size: 24px;
  `}
  ${media.md`
    font-size: 32px;
  `}
  ${media.lg`
    font-size: 42px;
  `}
`;

const CurrentWeatherWrapper = styled.div<any>`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => `url(${mapIconIdToSvg(props.weather.current.weather[0].icon)})`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.xs`
    height: 300px;
  `}
  ${media.md`
    height: 450px;
  `}
  ${media.lg`
    height: 600px;
  `}
`;

export const CurrentWeather: FC<any> = ({ weather }) => {
  return (
    <CurrentWeatherWrapper weather={weather}>
      <CurrentCityText>{weather.cityName}</CurrentCityText>
      <TemperatureText>{Math.round(weather.current.temp)} °C</TemperatureText>
    </CurrentWeatherWrapper>
  );
};

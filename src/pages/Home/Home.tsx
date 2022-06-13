import React, { FunctionComponent } from 'react';
import { useGeoLocation } from './useGeoLocation';
import { Spinner } from '../../components/Spinner/Spinner';
import { useUserWeather } from './useUserWeather';

export const Home: FunctionComponent = () => {
  const [isLoading, geoLocation] = useGeoLocation();
  const [weather] = useUserWeather(geoLocation);

  // todo: remove
  console.log(weather);

  if (isLoading) {
    return <Spinner />;
  }

  if (geoLocation === null) {
    return <div> Cant retrieve geolocation </div>;
  }

  return (
    <>
      {/*
      // @ts-ignore*/}
      {geoLocation.lat} {geoLocation.lng}
    </>
  );
};

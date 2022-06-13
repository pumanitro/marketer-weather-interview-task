import React, { FunctionComponent } from 'react';
import { useGeoLocation } from './useGeoLocation';
import { Spinner } from '../../components/Spinner/Spinner';

export const Home: FunctionComponent = () => {
  const [isLoading, geoLocation] = useGeoLocation();

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

import React, { FunctionComponent, useState } from 'react';
import { useGeoLocation } from './useGeoLocation';
import { Spinner } from '../../components/Spinner/Spinner';
import { useUserWeather } from './useUserWeather';
import { CitySearch } from './CitySearch';
import styled from 'styled-components';
import { SearchedCities } from './SearchedCities';
import { CurrentWeather } from './CurrentWeather';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Home: FunctionComponent = () => {
  const [isLoading, geoLocation] = useGeoLocation();
  const [weather] = useUserWeather(geoLocation);
  const [searchedCities, setSearchedCities] = useState<any>([]);

  if (isLoading) {
    return <Spinner />;
  }

  if (geoLocation === null) {
    return <div> Cant retrieve geolocation </div>;
  }

  return (
    <>
      <SearchWrapper>
        <h1>MinVærApp</h1>
        <CitySearch onSelect={item => setSearchedCities([...searchedCities, item])} />
      </SearchWrapper>
      {!geoLocation || !weather ? (
        <h2> Can&apos;t retrieve current location </h2>
      ) : (
        <CurrentWeather weather={weather} />
      )}
      <SearchedCities searchedCities={searchedCities && searchedCities.filter((search: any) => search)} />
    </>
  );
};

import React, { FunctionComponent, useState } from 'react';
import { useGeoLocation } from './useGeoLocation';
import { Spinner } from '../../components/Spinner/Spinner';
import { useUserWeather } from './useUserWeather';
import { CitySearch, NO_RESULTS } from './CitySearch';
import styled from 'styled-components';
import { SearchedCities } from './SearchedCities';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Home: FunctionComponent = () => {
  const [isLoading, geoLocation] = useGeoLocation();
  const [weather] = useUserWeather(geoLocation);
  const [searchedCities, setSearchedCities] = useState<any>([]);

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
      <SearchWrapper>
        <h1>MinVærApp</h1>
        <CitySearch onSelect={item => setSearchedCities([...searchedCities, item])} />
      </SearchWrapper>
      {/*
      // @ts-ignore*/}
      {geoLocation.lat} {geoLocation.lng}
      <SearchedCities
        searchedCities={searchedCities && searchedCities.filter((search: any) => search.label !== NO_RESULTS)}
      />
    </>
  );
};

import React, { FC } from 'react';
import { SearchedCity } from './SearchedCity';

export const SearchedCities: FC<any> = ({ searchedCities }) => {
  if (!searchedCities.length) {
    return null;
  }

  return (
    <div>
      <h2>Searched cities:</h2>
      {searchedCities.map((search: any, i: number) => {
        return <SearchedCity key={i} city={search} />;
      })}
    </div>
  );
};

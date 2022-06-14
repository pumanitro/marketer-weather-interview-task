import React, { FC } from 'react';
import { NO_RESULTS } from './CitySearch';

export const SearchedCities: FC<any> = ({ searchedCities }) => {
  if (!searchedCities.length) {
    return null;
  }

  return (
    <div>
      <div>Searched cities:</div>
      {searchedCities
        .filter((search: any) => search.label !== NO_RESULTS)
        .map((search: any, i: number) => {
          return <span key={i}>{search.name}</span>;
        })}
    </div>
  );
};

import React, { FC, useState } from 'react';
// because there are no types for this library available yet
// @ts-ignore
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { OpenWeatherMapService } from 'services/OpenWeatherMap';
import styled from 'styled-components';

type CitySearchProps = {
  // todo: define weather type
  onSelect: (item: any) => void;
};

const CitySearchWrapper = styled.div`
  width: 200px;
`;

export const CitySearch: FC<CitySearchProps> = ({ onSelect }) => {
  const [items, setItems] = useState([]);

  return (
    <CitySearchWrapper>
      <ReactSearchAutocomplete
        items={items}
        inputDebounce={250}
        onSearch={async (search: string) => {
          const cities = await OpenWeatherMapService.findCity(search);
          setItems(cities.list);
        }}
        onSelect={onSelect}
        autoFocus
        formatResult={(item: any) => {
          return (
            <span>
              {item.name}, {item.sys.country}, {item.main.temp} °C
            </span>
          );
        }}
      />
    </CitySearchWrapper>
  );
};

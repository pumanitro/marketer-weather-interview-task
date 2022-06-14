import React, { FC, useState } from 'react';
import { OpenWeatherMapService } from 'services/OpenWeatherMap';
import { AutoComplete, Input } from 'antd';
import styled from 'styled-components';
import _ from 'lodash';

type CitySearchProps = {
  // todo: define weather type
  onSelect: (item: any) => void;
};

const StyledAutocomplete = styled(AutoComplete)`
  width: 300px;
`;

export const CitySearch: FC<CitySearchProps> = ({ onSelect }) => {
  const [items, setItems] = useState([]);

  const options =
    items.length === 0
      ? [
          {
            value: 'No results',
          },
        ]
      : items.map((item: any) => {
          return {
            value: `${item.name}, ${item.sys.country}, ${item.main.temp} °C`,
          };
        });

  return (
    <StyledAutocomplete
      autoFocus
      options={options}
      defaultActiveFirstOption={false}
      style={{ width: 300 }}
      onSelect={onSelect}
      onSearch={_.throttle(async (search: string) => {
        try {
          const cities = await OpenWeatherMapService.findCity(search);
          setItems(cities.list);
        } catch {}
      }, 200)}
    >
      <Input.Search size="large" placeholder="Search city..." enterButton />
    </StyledAutocomplete>
  );
};

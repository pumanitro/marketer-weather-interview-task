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

export const NO_RESULTS = 'No results';

export const CitySearch: FC<CitySearchProps> = ({ onSelect }) => {
  const [items, setItems] = useState([]);

  const options =
    items.length === 0
      ? [
          {
            value: NO_RESULTS,
            label: NO_RESULTS,
          },
        ]
      : _.uniqBy(
          items.map((item: any) => {
            const label = `${item.name}, ${item.sys.country}, ${item.main.temp} °C`;
            return {
              value: label,
              label,
              item,
            };
          }),
          'label'
        );

  return (
    <StyledAutocomplete
      autoFocus
      options={options}
      defaultActiveFirstOption={false}
      style={{ width: 300 }}
      onSelect={(_: any, option: any) => onSelect(option.item)}
      filterOption={false}
      onSearch={_.throttle(async (search: string) => {
        try {
          const cities = await OpenWeatherMapService.findCity(search);
          setItems(cities.list);
        } catch {}
      }, 200)}
    >
      <Input.Search size="large" autoComplete="off" placeholder="Search city..." enterButton />
    </StyledAutocomplete>
  );
};

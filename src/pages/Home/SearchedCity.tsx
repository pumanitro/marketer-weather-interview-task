import { Card } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

const SearchTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchedCity: FC<any> = ({ city, key }) => {
  return (
    <Card key={key}>
      <SearchTextWrapper>
        <h2>{city.name}</h2>
        <h3>{city.main.temp} °C</h3>
      </SearchTextWrapper>
    </Card>
  );
};

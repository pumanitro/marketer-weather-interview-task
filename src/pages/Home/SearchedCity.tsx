import { Card } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';
import { mapIconIdToSvg } from './mapIconIdToSvg';

const SearchTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledCard = styled(Card)`
  margin-bottom: 8px;

  .ant-card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SearchedCity: FC<any> = ({ city }) => {
  const iconUrl = mapIconIdToSvg(city.weather[0].icon) || '';

  return (
    <StyledCard>
      <SearchTextWrapper>
        <h2>{city.name}</h2>
        <h3>{Math.round(city.main.temp)} °C</h3>
      </SearchTextWrapper>
      <img src={iconUrl} width={124} />
    </StyledCard>
  );
};

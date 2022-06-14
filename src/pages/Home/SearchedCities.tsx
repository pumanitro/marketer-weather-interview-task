import { Col, Row } from 'antd';
import React, { FC } from 'react';
import { SearchedCity } from './SearchedCity';

export const SearchedCities: FC<any> = ({ searchedCities }) => {
  if (!searchedCities.length) {
    return <h3> Use top search to get more cities listed </h3>;
  }

  return (
    <div>
      <h2>Searched cities:</h2>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {searchedCities.map((search: any, i: number) => {
          return (
            <Col xs={{ span: 24 }} md={{ span: 8 }} key={i}>
              <SearchedCity city={search} />{' '}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

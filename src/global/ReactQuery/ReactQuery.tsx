import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import React, { FC } from 'react';

export const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

export const ReactQuery: FC<{}> = ({ children }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ReactQueryDevtools initialIsOpen />
      {children}
    </ReactQueryCacheProvider>
  );
};

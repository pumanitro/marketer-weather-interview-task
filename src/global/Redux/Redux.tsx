import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import React, { FC } from 'react';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export const Redux: FC<{}> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

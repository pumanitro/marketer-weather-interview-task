import { combineReducers } from '@reduxjs/toolkit';
import { answersSlice } from './Slices/answersSlice';

const rootReducer = combineReducers({ answers: answersSlice.reducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

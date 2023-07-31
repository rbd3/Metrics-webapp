import { configureStore } from '@reduxjs/toolkit';
import metricSlice from './metricSlice';

export const store = configureStore({
  reducer: {
    movies: metricSlice,
  },
});

export default store;
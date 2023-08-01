import { configureStore } from '@reduxjs/toolkit';
import metricsSlice from './metricSlice';

export const store = configureStore({
  reducer: {
    metrics: metricsSlice,
  },
});

export default store;
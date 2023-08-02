import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from '../redux/metrics/metricsSlice';

export const store = configureStore({
  reducer: {
    users: metricsReducer,
  },
});

export default store;

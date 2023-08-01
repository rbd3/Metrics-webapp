import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.tvmaze.com/shows/1/episodes';
const initialState = {
  metrics: [],
  isLoading: true,
};

export const fetchMetrics = createAsyncThunk('metrics/getMetrics', async (metric) => {
  try {
    const response = await axios.get(url, {
      name: metric.name,
          season: metric.season,
          image: metric.image,
          summary: metric.summary,
          rating: metric.rating,
          id: metric.id,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch metrics');
  }
});

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        const metricsData = action.payload.map((metric) => ({
          name: metric.name,
          season: metric.season,
          image: metric.image,
          summary: metric.summary,
          rating: metric.rating,
          id: metric.id,
        }));
        
          //...state,
          //isLoading: false,
          //metrics: metricsData,
          state.isLoading = false;
          state.metrics = metricsData;
    
      })
      .addCase(fetchMetrics.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default metricsSlice.reducer;

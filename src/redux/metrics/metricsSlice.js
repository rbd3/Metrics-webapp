import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: true,
  error: '',
};

export const fetchMetrics = createAsyncThunk('metrics/fechMetrics', async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows/1/episodes');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fecth metrics.');
  }
});

const metricsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
 },
});

export default metricsSlice.reducer;

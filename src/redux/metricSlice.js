import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://api.tvmaze.com/shows/1/episodes';
const initialState = {
  metrics: [],
  isLoading: true,
};

export const fetchMetrics = createAsyncThunk('books/getMetrics', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch metrics');
  }
});

export const postMetrics = createAsyncThunk('books/postMetrics', async (book) => {
  try {
    const response = await axios.post(url, {
      id: book.id,
      name: book.name,
      season: book.season,
      image: book.image.medium,
      summary: book.summary,
      rating: book.rating.average,

    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to post book');
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
      .addCase(fetchMetrics.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: Object.entries(action.payload).map(([id]) => ({
          name: action.payload[id][0].name,
          season: action.payload[id][0].season,
          image: action.payload[id][0].image,
          summary: action.payload[id][0].summary,
          rating: action.payload[id][0].rating,
          id: id,
        })),
      }))
      .addCase(fetchMetrics.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { addBook, removeBook } = metricsSlice.actions;

export default metricsSlice.reducer;

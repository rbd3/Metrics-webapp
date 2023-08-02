import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.tvmaze.com/shows/1/episodes'; // Update this URL with the appropriate API for movies

const initialState = {
  Movies: [],
  isLoading: true,
  error: '',
};

export const fetchAllMovies = createAsyncThunk('getmovies/', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch movies');
  }
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Movies = action.payload.map((movie) => ({
          id: movie.id,
          name: movie.name,
          season: movie.season,
          summary: movie.summary,
          image: movie.image,
          rating: movie.rating,
          type: movie.type,
        }));
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default movieSlice.reducer;

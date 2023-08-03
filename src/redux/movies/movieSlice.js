import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.tvmaze.com/show';

const initialState = {
  Movies: [],
  categories: [],
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
          language: movie.language,
          summary: movie.summary,
          image: movie.image,
          rating: movie.rating,
          type: movie.type,
          category: movie.genres,
        }));
        const genresSet = new Set();
        action.payload.forEach((movie) => {
          movie.genres.forEach((genre) => {
            genresSet.add(genre);
          });
        });
        state.categories = Array.from(genresSet);
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default movieSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.tvmaze.com/shows';

const initialState = {
  Movies: [],
  categories: [],
  isLoading: true,
  error: '',
};

const fetchSeasons = async (showId) => {
  try {
    const response = await axios.get(`${baseURL}/${showId}/seasons`);
    return response.data.length; // number of seasons
  } catch (error) {
    return 0; // default to 0 if there's an error
  }
};

const fetchSeasonsForShows = async (shows) => 
  Promise.all(
    shows.map(async (show) => {
      const seasonsCount = await fetchSeasons(show.id);
      return { ...show, seasons: seasonsCount };
    }),
  );

export const fetchAllMovies = createAsyncThunk('getmovies/', async () => {
  try {
    const response = await axios.get(baseURL);
    const shows = response.data;
    const showsWithSeasons = await fetchSeasonsForShows(shows);
    return showsWithSeasons;
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
          seasons: movie.seasons,
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

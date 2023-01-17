import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getData from '../../api/index';

const initialState = {
  movies: [],
  isLoading: true,
  error: null,
};

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
  const pages = 1;
  const sortBy = 'popularity.asc';
  const response = await getData({ sortBy, pages });
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export default moviesSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;

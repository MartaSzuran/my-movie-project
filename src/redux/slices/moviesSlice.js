import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getData from '../../api/index';

const { REACT_APP_MOVIE_API_KEY } = process.env;
const { REACT_APP_DB_URL } = process.env;

const initialState = {
  movies: [],
  isLoading: true,
  error: null,
};

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
  const pages = 1;
  const sortBy = 'popularity.asc';
  const url = `${REACT_APP_DB_URL}?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${pages}&with_watch_monetization_types=flatrate`;
  const response = await getData(url);
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

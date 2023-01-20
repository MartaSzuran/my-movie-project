import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import defaultQueryParams from '../../utils/defaultApiQueryParams';
import getData from '../../api/index';

const { REACT_APP_DB_URL } = process.env;

const initialState = {
  movies: [],
  isLoading: true,
  error: null,
};

export const fetchPopularData = createAsyncThunk('movies/fetchPopularData', async (type) => {
  const pages = 1;
  const sortBy = 'popularity.desc';
  const defaultUrlQueryParams = defaultQueryParams(sortBy, pages, type);
  const url = `${REACT_APP_DB_URL}${defaultUrlQueryParams}`;
  const response = await getData(url);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopularData.fulfilled, (state, action) => {
        state.movies = action.payload.results;
      });
  },
});

export default moviesSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;

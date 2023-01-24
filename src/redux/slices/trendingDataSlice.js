import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDefaultQuery from '../../utils/defaultApiQueryParams';
import getData from '../../api';

const initialState = {
  trendingData: [],
  isLoading: true,
  error: null,
};

export const fetchTrendingCaruselData = createAsyncThunk('trendingData/fetchTrendingCaruselData', async (type) => {
  const mainTrendingQuery = '3/trending/movie';
  const response = await getData(getDefaultQuery(mainTrendingQuery, type));
  return response.data;
});

const trendingDataSlice = createSlice({
  name: 'trendingData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrendingCaruselData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trendingData = action.payload.results;
      })
      .addCase(fetchTrendingCaruselData.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export default trendingDataSlice.reducer;

export const selectAllTrendingCaruselData = (state) => state.trendingData.trendingData;

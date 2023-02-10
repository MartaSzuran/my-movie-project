import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDefaultQuery from '../../utils/defaultApiQueryParams';
import { getData } from '../../api';

const initialState = {
  trendingData: [],
  isLoading: true,
  error: null,
};

export const fetchTrendingCaruselData = createAsyncThunk('trendingData/fetchTrendingCaruselData', async (type) => {
  const otherUrlPart = `trending/movie/${type}`;
  const trendingQuery = '&include_video=false&with_watch_monetization_types=flatrate&append_to_response=images&include_image_language=en';
  const response = await getData(getDefaultQuery(otherUrlPart, trendingQuery));
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

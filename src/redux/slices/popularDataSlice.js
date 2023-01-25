import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDefaultQuery from '../../utils/defaultApiQueryParams';
import getData from '../../api/index';

const initialState = {
  popularData: [],
  isLoading: true,
  error: null,
};

export const fetchPopularCaruselData = createAsyncThunk('popularData/fetchPopularCaruselData', async (type) => {
  const otherUrlPart = `discover/${type}`;
  const sortBy = 'popularity.desc';
  const pages = '1';
  const popularQuery = `&${sortBy && `sort_by=${sortBy}`}&include_video=false&page=${pages}&with_watch_monetization_types=flatrate&append_to_response=images&include_image_language=en`;
  const response = await getData(getDefaultQuery(otherUrlPart, popularQuery));
  return response.data;
});

const popularDataSlice = createSlice({
  name: 'popularData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopularCaruselData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularData = action.payload.results;
      })
      .addCase(fetchPopularCaruselData.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export default popularDataSlice.reducer;

export const selectAllPopularCaruselData = (state) => state.popularData.popularData;

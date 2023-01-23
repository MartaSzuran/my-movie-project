import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDefaultQuery from '../../utils/defaultApiQueryParams';
import getData from '../../api/index';

const { REACT_APP_DB_URL } = process.env;

const initialState = {
  popularData: [],
  isLoading: true,
  error: null,
};

export const fetchPopularCaruselData = createAsyncThunk('popularData/fetchPopularCaruselData', async (type) => {
  const sortBy = 'popularity.desc';
  const url = `${REACT_APP_DB_URL}${getDefaultQuery(sortBy, type)}`;
  const response = await getData(url);
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

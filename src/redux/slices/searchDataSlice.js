import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDefaultQuery from '../../utils/defaultApiQueryParams';
import getData from '../../api/index';

const initialState = {
  searchData: [],
  isLoading: true,
  error: null,
};

export const fetchSearchData = createAsyncThunk('searchData/fetchSearchData', async ({ searchQuery, searchType }) => {
  const otherUrlPart = `search/${searchType}`;
  const searchQueryValue = `&query=${searchQuery}&page=1`;
  const response = await getData(getDefaultQuery(otherUrlPart, searchQueryValue));
  return response.data;
});

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchData = action.payload.results;
      });
  },
});

export default searchDataSlice.reducer;

export const selectAllSeachData = (state) => state.searchData.searchData;

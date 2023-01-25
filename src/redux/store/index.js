import { configureStore } from '@reduxjs/toolkit';
import popularDataSlice from '../slices/popularDataSlice';
import trendingDataSlice from '../slices/trendingDataSlice';
import searchDataSlice from '../slices/searchDataSlice';

export default configureStore({
  reducer: {
    popularData: popularDataSlice,
    trendingData: trendingDataSlice,
    searchData: searchDataSlice,
  },
});

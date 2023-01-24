import { configureStore } from '@reduxjs/toolkit';
import popularDataSlice from '../slices/popularDataSlice';
import trendingDataSlice from '../slices/trendingDataSlice';

export default configureStore({
  reducer: {
    popularData: popularDataSlice,
    trendingData: trendingDataSlice,
  },
});

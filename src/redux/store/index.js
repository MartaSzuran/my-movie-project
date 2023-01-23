import { configureStore } from '@reduxjs/toolkit';
import popularDataSlice from '../slices/popularDataSlice';

export default configureStore({
  reducer: {
    popularData: popularDataSlice,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import userAgencyReducer from './Agency/agencySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    agency: userAgencyReducer,
  },
});

export default store;

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/AuthSlice'; // Import the auth slice

const store = configureStore({
  reducer: {
    auth: authSlice, // Add auth reducer
  },
});

export default store;

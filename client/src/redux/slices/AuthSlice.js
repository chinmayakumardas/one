// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload; // Set user data
      state.isAuthenticated = true; // Set authenticated to true
    },
    logout(state) {
      state.user = null; // Clear user data
      state.isAuthenticated = false; // Set authenticated to false
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

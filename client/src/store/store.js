import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

// Redux store to hold global state
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
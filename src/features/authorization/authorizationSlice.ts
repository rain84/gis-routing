import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'store';
import { fetchAuth } from './authorizationAPI';

export interface authorizationState {
  isAuthorized: boolean;
  email: string;
  password: string;
}

const initialState: authorizationState = {
  isAuthorized: false,
  email: '',
  password: ''
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    login: (state, action) => {
      Object.assign(state, {
        ...action.payload,
        isAuthorized: true
      });
    },
    logout: (state) => {
      Object.assign(state, {
        ...initialState
      });
      state.isAuthorized = false;
    }
  }
});

export const { login, logout } = authorizationSlice.actions;
export const selectAuthorization = (state: RootState) => state.authorization;
export default authorizationSlice.reducer;

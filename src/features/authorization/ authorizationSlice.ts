import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'store';
import { fetchAuth } from './ authorizationAPI';

export interface authorizationState {
  isAuthorized: boolean;
}

const initialState: authorizationState = {
  isAuthorized: false
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.isAuthorized = false;
    }
  }
});

export const { login, logout } = authorizationSlice.actions;
export const selectAuthorization = (state: RootState) => state.authorization;
export default authorizationSlice.reducer;

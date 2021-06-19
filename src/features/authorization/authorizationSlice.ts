import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface AuthorizationState {
  isAuthorized: boolean;
}

const initialState: AuthorizationState = {
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

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  password: ''
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    set: (state, action) => {
      Object.assign(state, action.payload);
    },
    unset: (state) => {
      Object.assign(state, initialState);
    }
  }
});

export const { set, unset } = UserSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default UserSlice.reducer;

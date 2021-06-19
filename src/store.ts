import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authorization from 'features/authorization/authorizationSlice';
import user from 'features/user/userSlice';

export const store = configureStore({
  reducer: {
    authorization,
    user
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

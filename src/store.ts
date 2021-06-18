import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authorization from 'features/authorization/ authorizationSlice';

export const store = configureStore({
  reducer: {
    authorization
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

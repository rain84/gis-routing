import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/redux-toolkit';
import { logout } from './authorizationSlice';
import { unset } from 'features/user/userSlice';

export const Logout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(unset());
    dispatch(logout());
  }, [dispatch]);

  return null;
};

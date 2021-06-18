import { useRef } from 'react';

import { Login, FormData } from 'components/login';
import { useAppSelector, useAppDispatch } from 'hooks/redux-toolkit';
import { login, selectAuthorization } from './ authorizationSlice';

export const GuardAuthorization = ({ children }: { children: JSX.Element }) => {
  const { isAuthorized } = useAppSelector(selectAuthorization);
  const dispatch = useAppDispatch();
  const onSubmit = useRef((payload: FormData) => dispatch(login(payload))).current

  return isAuthorized ? children : <Login onSubmit={ onSubmit }/>;
};;

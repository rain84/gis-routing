import { useRef } from 'react';
import { useHistory, Route } from 'react-router-dom';
import { URLS } from 'routing/urls';
import { Login, FormData } from 'components/login';
import { useAppSelector, useAppDispatch, useEnv } from 'hooks';
import { login, selectAuthorization } from './authorizationSlice';
import { set } from 'features/user/userSlice';
import { Logout } from './logout';

export const Authorization = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { isAuthorized } = useAppSelector(selectAuthorization);
  const env = useEnv();

  if (env.REACT_APP_DEV) {
    dispatch(login());
    dispatch(
      set({
        email: env.REACT_APP_EMAIL,
        password: env.REACT_APP_PASSWORD
      })
    );
  }

  const onSubmit = useRef((payload: FormData) => {
    dispatch(login());
    dispatch(set(payload));
  }).current;

  if (isAuthorized)
    return (
      <>
        {children}
        <Route path={URLS.LEVEL1.logout} component={Logout} />
      </>
    );
  history.replace('/login');

  return <Login onSubmit={onSubmit} />;
};

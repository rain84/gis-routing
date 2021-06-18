import { useState } from 'react';

import { useAppSelector, useAppDispatch } from 'hooks/redux-toolkit';
import { login, logout, selectAuthorization } from './ authorizationSlice';

export const GuardAuthorization = ({ children }: FCProps) => {
  const { isAuthorized } = useAppSelector(selectAuthorization);
  const dispatch = useAppDispatch();

  return (
    <section>
      <p>Authorization</p>
      <p>{isAuthorized ? 'isAuthorized' : 'not isAuthorized'}</p>
    </section>
  );
};

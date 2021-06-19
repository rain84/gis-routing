import { createContext } from 'react';
import { useAppSelector } from 'hooks/redux-toolkit';
import { selectUser } from 'features/user/userSlice';
import { Header, Main } from './components';
import { THeaderContext } from './types';

export const HeaderContext = createContext<THeaderContext>({});

export const StackedLayouts = ({ children }: FCProps) => {
  const user = useAppSelector(selectUser);
  const headerProps = { userInfo: user.email };

  return (
    <div className="min-h-full min-w-full flex flex-col">
      <HeaderContext.Provider value={headerProps}>
        <Header className="flex-shrink" />
        <Main className="flex-grow single-child-in-center">{children}</Main>
      </HeaderContext.Provider>
    </div>
  );
};

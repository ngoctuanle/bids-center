import React, { createContext, ReactNode, useContext, useState } from 'react';

const IsAuthenticateContext = createContext(false);
IsAuthenticateContext.displayName = 'IsAuthenticateContext';

const UserContext = createContext<unknown>({});
UserContext.displayName = 'UserContext';

type SetUserType = (user: unknown) => void;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const SetUserContext = createContext<SetUserType>(() => {});
SetUserContext.displayName = 'SetUserContext';

export const useAuthContext = () => ({
  isAuthenticated: useContext(IsAuthenticateContext),
  user: useContext(UserContext),
  setUser: useContext(SetUserContext),
});

export function AuthProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<unknown>({});

  const setUserInfo = (user: unknown) => {
    setUser(user);
    setIsAuthenticated(Boolean(user));
  };

  return (
    <SetUserContext.Provider value={setUserInfo}>
      <UserContext.Provider value={user}>
        <IsAuthenticateContext.Provider value={isAuthenticated}>
          {children}
        </IsAuthenticateContext.Provider>
      </UserContext.Provider>
    </SetUserContext.Provider>
  );
}

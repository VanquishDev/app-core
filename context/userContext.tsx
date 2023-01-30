import React, { useState, createContext, useContext } from 'react';

interface IUserContextProps {
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
}

export const UserContext = createContext<IUserContextProps>({
  user: {
    id: '',
    name: ''
  },
  loading: true,
  setUser: () => {},
  setLoading: () => {},
});

export const UserContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState({
    id: '1',
    name: 'Renato Carvalho'
  });
  const [isLoading, setIsLoading] = useState(true);

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
import React, { useState, createContext, useContext } from 'react';

interface IGlobalContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  theme: '',
  setTheme: () => {},
});

export const GlobalContextProvider = (props: any) => {
  const [theme, setTheme] = useState('light');

  return (
    <GlobalContext.Provider
      value={{ theme, setTheme}}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
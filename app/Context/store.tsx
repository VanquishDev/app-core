'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

type DataType = {
  firstName: string;
};

interface ContextProps {
  backend: any,
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  backend: {},
  userId: '',
  setUserId: (): string => '',
  data: [],
  setData: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }: any) => {
  const backend = {
    stackCodeName: `${process.env.stackCodeName}`,
    branchName: `${process.env.branchName}`,
    url: `${process.env.url}`,
    userPoolId: `${process.env.userPoolId}`,
    userPoolClientId: `${process.env.userPoolClientId}`,
    userPoolRegion: `${process.env.userPoolRegion}`,
    identityPoolId: `${process.env.identityPoolId}`,
    graphqlURL: `${process.env.graphqlURL}`,
    graphqlApiKey: `${process.env.graphqlApiKey}`,
    bucketName: `${process.env.bucketName}`,
    bucketRegion: `${process.env.bucketRegion}`,
    cloudFrontDistribution: `${process.env.cloudFrontDistribution}`,
  };

  const [userId, setUserId] = useState('');
  const [data, setData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider value={{ backend, userId, setUserId, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

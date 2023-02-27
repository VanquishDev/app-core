import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateConfigInput,
  UpdateConfigInput,
  ListConfigQueryVariables,
} from '@/API';

export const useConfig = () => {
  const createConfig = async (input: CreateConfigInput) => {
    await API.graphql({
      query: mutations.createConfig,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updateConfig = async (input: UpdateConfigInput) => {
    await API.graphql({
      query: mutations.updateConfig,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listConfig = async (variables: ListConfigQueryVariables) => {
    const {
      data: {
        listConfig: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listConfig,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createConfig,
    updateConfig,
    listConfig
  };
};

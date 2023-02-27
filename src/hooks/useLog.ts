import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateLogInput,
  ListLogsByUserCreatedAtQueryVariables,
} from '@/API';

export const useLog = () => {
  const createLog = async (input: CreateLogInput) => {
    await API.graphql({
      query: mutations.createLog,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listLogsByUserCreatedAt = async (variables: ListLogsByUserCreatedAtQueryVariables) => {
    const {
      data: {
        listLogsByUserCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listLogsByUserCreatedAt,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createLog,
    listLogsByUserCreatedAt
  };
};

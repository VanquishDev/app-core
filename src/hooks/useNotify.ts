import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateNotifyInput,
  DeleteNotifyInput,
  ListNotifyByUserCreatedAtQueryVariables,
} from '@/API';

export const useNotify = () => {
  const createNotify = async (input: CreateNotifyInput) => {
    await API.graphql({
      query: mutations.createNotify,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteNotify = async (input: DeleteNotifyInput) => {
    await API.graphql({
      query: mutations.deleteNotify,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listNotifyByUserCreatedAt = async (variables: ListNotifyByUserCreatedAtQueryVariables) => {
    const {
      data: {
        listNotifyByUserCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listNotifyByUserCreatedAt,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createNotify,
    deleteNotify,
    listNotifyByUserCreatedAt
  };
};

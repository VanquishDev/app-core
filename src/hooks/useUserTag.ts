import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateUserTagInput,
  DeleteUserTagInput,
  ListUsersByTagQueryVariables,
  ListTagsByUserQueryVariables,
} from '@/API';

export const useUserTag = () => {
  const createUserTag = async (input: CreateUserTagInput) => {
    await API.graphql({
      query: mutations.createUserTag,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteUserTag = async (input: DeleteUserTagInput) => {
    await API.graphql({
      query: mutations.deleteUserTag,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listUsersByTag = async (variables: ListUsersByTagQueryVariables) => {
    const {
      data: {
        listUsersByTag: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUsersByTag,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listTagsByUser = async (variables: ListTagsByUserQueryVariables) => {
    const {
      data: {
        listTagsByUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listTagsByUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createUserTag,
    deleteUserTag,
    listUsersByTag,
    listTagsByUser
  };
};

import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateUserTagInput,
  DeleteUserTagInput,
  ListUsersByTagUserQueryVariables,
  ListTagsByUserTagQueryVariables,
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

  const listUsersByTagUser = async (variables: ListUsersByTagUserQueryVariables) => {
    const {
      data: {
        listUsersByTagUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUsersByTagUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listTagsByUserTag = async (variables: ListTagsByUserTagQueryVariables) => {
    const {
      data: {
        listTagsByUserTag: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listTagsByUserTag,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createUserTag,
    deleteUserTag,
    listUsersByTagUser,
    listTagsByUserTag
  };
};

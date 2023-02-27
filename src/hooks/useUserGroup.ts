import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateUserGroupInput,
  DeleteUserGroupInput,
  ListUsersByGroupUserQueryVariables,
  ListGroupsByUserGroupQueryVariables,
} from '@/API';

export const useUserGroup = () => {
  const createUserGroup = async (input: CreateUserGroupInput) => {
    await API.graphql({
      query: mutations.createUserGroup,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteUserGroup = async (input: DeleteUserGroupInput) => {
    await API.graphql({
      query: mutations.deleteUserGroup,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listUsersByGroupUser = async (variables: ListUsersByGroupUserQueryVariables) => {
    const {
      data: {
        listUsersByGroupUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUsersByGroupUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listGroupsByUserGroup = async (variables: ListGroupsByUserGroupQueryVariables) => {
    const {
      data: {
        listGroupsByUserGroup: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listGroupsByUserGroup,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createUserGroup,
    deleteUserGroup,
    listUsersByGroupUser,
    listGroupsByUserGroup
  };
};

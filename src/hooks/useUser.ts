import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  GetUserQueryVariables,
  GetUserByEmailQueryVariables,
  GetUserByPhoneQueryVariables,
  ListUsersByStatusCreatedAtQueryVariables,
} from '@/API';

export const useUser = () => {
  const createUser = async (input: CreateUserInput) => {
    await API.graphql({
      query: mutations.createUser,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updateUser = async (input: UpdateUserInput) => {
    await API.graphql({
      query: mutations.updateUser,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteUser = async (input: DeleteUserInput) => {
    await API.graphql({
      query: mutations.deleteUser,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const getUser = async (variables: GetUserQueryVariables) => {
    const {
      data: { getUser }
    } = (await API.graphql({
      query: queries.getUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    })) as GraphQLResult<any>
    return getUser
  }

  const getUserByEmail = async (variables: GetUserByEmailQueryVariables) => {
    const {
      data: { getUserByEmail }
    } = (await API.graphql({
      query: queries.getUserByEmail,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    })) as GraphQLResult<any>
    return getUserByEmail
  }

  const getUserByPhone = async (variables: GetUserByPhoneQueryVariables) => {
    const {
      data: { getUserByPhone }
    } = (await API.graphql({
      query: queries.getUserByPhone,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    })) as GraphQLResult<any>
    return getUserByPhone
  }

  const listUsersByStatusCreatedAt = async (variables: ListUsersByStatusCreatedAtQueryVariables) => {
    const {
      data: {
        listUsersByStatusCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUsersByStatusCreatedAt,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  
  return {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUserByEmail,
    getUserByPhone,
    listUsersByStatusCreatedAt
  };
};

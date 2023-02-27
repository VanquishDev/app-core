import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateProfileInput,
  UpdateProfileInput,
  DeleteProfileInput,
  GetProfileQueryVariables,
  ListUsersByBirthDayQueryVariables,
} from '@/API';

export const useProfile = () => {
  const createProfile = async (input: CreateProfileInput) => {
    await API.graphql({
      query: mutations.createProfile,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updateProfile = async (input: UpdateProfileInput) => {
    await API.graphql({
      query: mutations.updateProfile,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteProfile = async (input: DeleteProfileInput) => {
    await API.graphql({
      query: mutations.deleteProfile,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const getProfile = async (variables: GetProfileQueryVariables) => {
    const {
      data: { getProfile }
    } = (await API.graphql({
      query: queries.getProfile,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    })) as GraphQLResult<any>
    return getProfile
  }

  const listUsersByBirthDay = async (variables: ListUsersByBirthDayQueryVariables) => {
    const {
      data: {
        listUsersByBirthDay: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUsersByBirthDay,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createProfile,
    updateProfile,
    deleteProfile,
    getProfile,
    listUsersByBirthDay
  };
};

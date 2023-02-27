import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreatePayMethodInput,
  UpdatePayMethodInput,
  DeletePayMethodInput,
  ListPayMethodsByUserQueryVariables,
} from '@/API';

export const usePayMethod = () => {
  const createPayMethod = async (input: CreatePayMethodInput) => {
    await API.graphql({
      query: mutations.createPayMethod,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updatePayMethod = async (input: UpdatePayMethodInput) => {
    await API.graphql({
      query: mutations.updatePayMethod,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deletePayMethod = async (input: DeletePayMethodInput) => {
    await API.graphql({
      query: mutations.deletePayMethod,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listPayMethodsByUser = async (variables: ListPayMethodsByUserQueryVariables) => {
    const {
      data: {
        listPayMethodsByUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listPayMethodsByUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createPayMethod,
    updatePayMethod,
    deletePayMethod,
    listPayMethodsByUser
  };
};

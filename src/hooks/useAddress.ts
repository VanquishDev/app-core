import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateAddressInput,
  UpdateAddressInput,
  DeleteAddressInput,
  ListAddressesByUserQueryVariables,
} from '@/API';

export const useAddress = () => {
  const createAddress = async (input: CreateAddressInput) => {
    await API.graphql({
      query: mutations.createAddress,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updateAddress = async (input: UpdateAddressInput) => {
    await API.graphql({
      query: mutations.updateAddress,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteAddress = async (input: DeleteAddressInput) => {
    await API.graphql({
      query: mutations.deleteAddress,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listAddressesByUser = async (variables: ListAddressesByUserQueryVariables) => {
    const {
      data: {
        listAddressesByUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listAddressesByUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createAddress,
    updateAddress,
    deleteAddress,
    listAddressesByUser
  };
};

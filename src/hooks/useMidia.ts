import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateMidiaInput,
  UpdateMidiaInput,
  DeleteMidiaInput,
  ListMidiasQueryVariables,
  ListMidiasByKeyQueryVariables,
} from '@/API';

export const useMidia = () => {
  const createMidia = async (input: CreateMidiaInput) => {
    await API.graphql({
      query: mutations.createMidia,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updateMidia = async (input: UpdateMidiaInput) => {
    await API.graphql({
      query: mutations.updateMidia,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteMidia = async (input: DeleteMidiaInput) => {
    await API.graphql({
      query: mutations.deleteMidia,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listMidias = async (variables: ListMidiasQueryVariables) => {
    const {
      data: {
        listMidias: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listMidias,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listMidiasByKey = async (variables: ListMidiasByKeyQueryVariables) => {
    const {
      data: {
        listMidiasByKey: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listMidiasByKey,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };
  
  return {
    createMidia,
    updateMidia,
    deleteMidia,
    listMidias,
    listMidiasByKey
  };
};

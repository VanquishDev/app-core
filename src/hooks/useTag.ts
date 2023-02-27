import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateTagInput,
  UpdateTagInput,
  DeleteTagInput,
  ListTagsQueryVariables,
  ListTagsByTypeNameQueryVariables,
  ListTagsByStatusNameQueryVariables,
} from '@/API';

export const useTag = () => {
  const createTag = async (input: CreateTagInput) => {
    await API.graphql({
      query: mutations.createTag,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updateTag = async (input: UpdateTagInput) => {
    await API.graphql({
      query: mutations.updateTag,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteTag = async (input: DeleteTagInput) => {
    await API.graphql({
      query: mutations.deleteTag,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listTags = async (variables: ListTagsQueryVariables) => {
    const {
      data: {
        listTags: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listTags,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listTagsByTypeName = async (variables: ListTagsByTypeNameQueryVariables) => {
    const {
      data: {
        listTagsByTypeName: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listTagsByTypeName,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listTagsByStatusName = async (variables: ListTagsByStatusNameQueryVariables) => {
    const {
      data: {
        listTagsByStatusName: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listTagsByStatusName,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };
  
  return {
    createTag,
    updateTag,
    deleteTag,
    listTags,
    listTagsByTypeName,
    listTagsByStatusName
  };
};

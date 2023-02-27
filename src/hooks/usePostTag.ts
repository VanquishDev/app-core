import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreatePostTagInput,
  DeletePostTagInput,
  ListTagsByPostQueryVariables,
  ListPostsByTagQueryVariables,
} from '@/API';

export const usePostTag = () => {
  const createPostTag = async (input: CreatePostTagInput) => {
    await API.graphql({
      query: mutations.createPostTag,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deletePostTag = async (input: DeletePostTagInput) => {
    await API.graphql({
      query: mutations.deletePostTag,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listTagsByPost = async (variables: ListTagsByPostQueryVariables) => {
    const {
      data: {
        listTagsByPost: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listTagsByPost,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listPostsByTag = async (variables: ListPostsByTagQueryVariables) => {
    const {
      data: {
        listPostsByTag: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listPostsByTag,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createPostTag,
    deletePostTag,
    listTagsByPost,
    listPostsByTag
  };
};

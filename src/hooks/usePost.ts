import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreatePostInput,
  UpdatePostInput,
  DeletePostInput,
  ListPostsByUserCreatedAtQueryVariables,
} from '@/API';

export const usePost = () => {
  const createPost = async (input: CreatePostInput) => {
    await API.graphql({
      query: mutations.createPost,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updatePost = async (input: UpdatePostInput) => {
    await API.graphql({
      query: mutations.updatePost,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deletePost = async (input: DeletePostInput) => {
    await API.graphql({
      query: mutations.deletePost,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listPostsByUserCreatedAt = async (variables: ListPostsByUserCreatedAtQueryVariables) => {
    const {
      data: {
        listPostsByUserCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listPostsByUserCreatedAt,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createPost,
    updatePost,
    deletePost,
    listPostsByUserCreatedAt
  };
};

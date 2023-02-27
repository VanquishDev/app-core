import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import {
  CreateCommentInput,
  UpdateCommentInput,
  DeleteCommentInput,
  ListCommentsByPostCreatedAtQueryVariables,
  ListCommentsByUserCreatedAtQueryVariables,
} from '@/API';

export const useComment = () => {
  const createComment = async (input: CreateCommentInput) => {
    await API.graphql({
      query: mutations.createComment,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const updateComment = async (input: UpdateCommentInput) => {
    await API.graphql({
      query: mutations.updateComment,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const deleteComment = async (input: DeleteCommentInput) => {
    await API.graphql({
      query: mutations.deleteComment,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
  };

  const listCommentsByPostCreatedAt = async (variables: ListCommentsByPostCreatedAtQueryVariables) => {
    const {
      data: {
        listCommentsByPostCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listCommentsByPostCreatedAt,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  const listCommentsByUserCreatedAt = async (variables: ListCommentsByUserCreatedAtQueryVariables) => {
    const {
      data: {
        listCommentsByUserCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listCommentsByUserCreatedAt,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>;
    return { items, nextToken };
  };

  return {
    createComment,
    updateComment,
    deleteComment,
    listCommentsByPostCreatedAt,
    listCommentsByUserCreatedAt
  };
};

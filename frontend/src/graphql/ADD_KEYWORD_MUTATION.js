import gql from "graphql-tag";

export const ADD_KEYWORD_MUTATION = gql`
  mutation($userId: ID!, $keyword: String!) {
    addKeyword(userId: $userId, keyword: $keyword) {
      id
      keywords {
        id
        keyword
        createdAt
      }
    }
  }
`;

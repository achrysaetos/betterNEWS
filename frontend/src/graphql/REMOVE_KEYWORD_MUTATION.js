import gql from "graphql-tag";

export const REMOVE_KEYWORD_MUTATION = gql`
  mutation($userId: ID!, $keyword: String!) {
    removeKeyword(userId: $userId, keyword: $keyword) {
      id
      keywords {
        id
        keyword
        createdAt
      }
    }
  }
`;

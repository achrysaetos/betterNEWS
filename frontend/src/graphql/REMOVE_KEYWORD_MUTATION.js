import gql from "graphql-tag";

export const REMOVE_KEYWORD_MUTATION = gql`
  mutation removeKeyword($userId: ID!, $keywordId: ID!) {
    removeKeyword(userId: $userId, keywordId: $keywordId) {
      id
      keywords {
        id
        keyword
        createdAt
      }
    }
  }
`;

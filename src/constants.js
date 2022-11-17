import { gql } from '@apollo/client';

export const DEFAULT_SEARCH = 'react';

export const GRAPH_QL = 'https://api.github.com/graphql';

export const GRAPHQL_REACT_REPOS = gql`
  query listRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            stargazerCount
            forkCount
          }
        }
      }
    }
  }
`;

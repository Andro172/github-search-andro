import { gql } from 'apollo-boost';

export const SEARCH = gql`
    mutation search($searchTerm: String!) {
        search(searchTerm: $searchTerm) @client
    }
`;

export const FIND_USER = gql`
    query($searchTerm: String!) {
        repositoryOwner(login: $searchTerm) {
            id
            login
            avatarUrl
            url
            ... on User {
                email
            }
            repositories (first: 100, orderBy: {field: CREATED_AT, direction: DESC}){
                nodes {
                id
                name
                description
                url
                }
            }
        }
    }
`;

export const GET_SEARCH_TERM = gql`
  {
    searchTerm @client
  }
`;
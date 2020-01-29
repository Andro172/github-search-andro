import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";
import Loading from './Loading';
import Error from './Error';
import UserProfile from './UserProfile';
import UserReposList from './UserReposList';

const FIND_USER = gql`
  query($searchTerm: String!) {
    repositoryOwner(login: $searchTerm) {
      login
      avatarUrl
      url
      ... on User {
        email
      }
      repositories (first: 10, orderBy: {field: CREATED_AT, direction: DESC}){
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

/* const SAVE_USER = gql`
  mutation saveUser($username: String!) {
    saveUser(user: $searchTerm) @client
  }
`; */

function FindUser(props) {
  const { searchTerm } = props;
  return (
    <Query query={FIND_USER} variables={{ searchTerm }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />
      if (!data.repositoryOwner) return <h5 className="text-center mt-5">User Not Found</h5>;

      return (
        <div>
          <UserProfile
            login={data.repositoryOwner.login}
            email={data.repositoryOwner.email}
            avatarUrl={data.repositoryOwner.avatarUrl}
            url={data.repositoryOwner.url}
          />
          <UserReposList repos={data.repositoryOwner.repositories.nodes}/>
        </div>
      )
    }}
    </Query>
  );
}

export default FindUser;

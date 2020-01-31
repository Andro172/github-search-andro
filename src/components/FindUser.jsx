import React from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { FIND_USER } from '../provider/queries';
import Loading from './Loading';
import Error from './Error';
import UserProfile from './UserProfile';
import UserReposList from './UserReposList';

function FindUser(props) {
  const { searchTerm } = props;
  return (
    <Query query={FIND_USER} variables={{ searchTerm }}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <Error />
      if (!data || !data.repositoryOwner) return <h5 className="text-center mt-5">User Not Found</h5>;

      return (
        <div>
          <UserProfile
            login={data.repositoryOwner.login}
            email={data.repositoryOwner.email}
            avatarUrl={data.repositoryOwner.avatarUrl}
            url={data.repositoryOwner.url}
          />
          <hr />
          <UserReposList userId={data.repositoryOwner.id} repos={data.repositoryOwner.repositories.nodes} />
        </div>
      )
    }}
    </Query>
  );
}

FindUser.propTypes = {
  searchTerm: PropTypes.string.isRequired
};

export default FindUser;

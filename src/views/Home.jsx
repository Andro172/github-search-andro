import React from 'react';
import Container from 'react-bootstrap/Container';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FindUser from '../components/FindUser';
import Loading from '../components/Loading';
import Error from '../components/Error';

const GET_SEARCH_TERM = gql`
  {
    searchTerm @client
  }
`;
class Home extends React.Component {
  render() {
    return (
      <Container className="route">
        <Query query={GET_SEARCH_TERM}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error />
          if(!data.searchTerm) return <div>put something if nothing is searched</div>;

          return (
            <FindUser searchTerm={data.searchTerm} />
          )
        }}
        </Query>
      </Container>
    );
  }
}

export default Home;

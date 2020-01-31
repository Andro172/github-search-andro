import React from 'react';
import Container from 'react-bootstrap/Container';
import { Query } from 'react-apollo';
import FindUser from '../components/FindUser';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Idle from './Idle';
import { GET_SEARCH_TERM } from '../provider/queries';

function Home() {
  return (
    <Container className="route">
      <Query query={GET_SEARCH_TERM}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <Error />
        if(!data.searchTerm) return <Idle />;

        return (
          <FindUser searchTerm={data.searchTerm} />
        )
      }}
      </Query>
    </Container>
  );
}

export default Home;

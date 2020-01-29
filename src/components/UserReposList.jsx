import React from 'react';
import Link from './Link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserReposList(props) {
  const { repos } = props;
  return (
    <Row className="mt-1 mt-lg-5">
      {
        !repos.length && (
          <Col>
            <h5 className="text-center">User has no public repositories</h5>
          </Col>
        )
      }
      {
        !!repos.length && repos.map(repo => (
          <Col key={repo.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <h5>{repo.name}</h5>
            <p>{repo.description ? repo.description : "No description"}</p>
            <p><Link href={repo.url}>{repo.url}</Link></p>
          </Col>
        ))
      }
    </Row>
  )
}

export default UserReposList;
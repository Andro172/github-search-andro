import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SortControls from './SortControls';

class UserReposList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      repositories: []
    }

    this.sortList = this.sortList.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.userId !== prevState.userId){
      return { 
        userId: nextProps.userId,
        repositories: nextProps.repos 
      };
    }
    else return null;
  }

  sortList(key,direction) {
    let list = [...this.state.repositories];
    list.sort((first, second) => {
      // put empty field after
      if(!first[key]) return 1;
      else if(!second[key]) return -1;
      else if(!first[key] && !second[key]) return 0;

      if(direction === 'asc') {
        return first[key].toLowerCase().localeCompare(second[key].toLowerCase())
      }
      else {
        return second[key].toLowerCase().localeCompare(first[key].toLowerCase())
      }
    });
    this.setState({ repositories: list })
  }

  render() {
    const { repositories } = this.state;
    let sortControls, repoList = null;

    if(!repositories.length) {
      repoList = 
        <Col>
          <h5 className="text-center">User has no public repositories</h5>
        </Col>;
    }
    else {
      sortControls = <SortControls sortList={this.sortList} />;
      repoList = repositories.map(repo => (
        <Col key={repo.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <h5>{repo.name}</h5>
          <p>{repo.description ? repo.description : "No description"}</p>
          <p><Link href={repo.url}>{repo.url}</Link></p>
        </Col>
      ));
    }

    return (
      <div>
        {sortControls}
        <Row className="mt-5">
          {repoList}
        </Row>
      </div>
    )
  }
}

UserReposList.propTypes = {
  userId: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  })).isRequired
}

export default UserReposList;
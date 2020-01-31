import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

const keys = {
  NAME: "name",
  DESCRIPTION: "description"
};

const direction = {
  ASC: "asc",
  DESC: "desc"
};

class SortControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "name",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <p>Sort by</p>
        <div className="d-flex flex-row">
          <select 
            id="key" 
            onChange={this.handleChange} 
            value={this.state.key}
            name="key"
            className="mr-3"
          >
            <option value={keys.NAME}>Name</option>
            <option value={keys.DESCRIPTION}>Description</option>
          </select>

          <AiOutlineSortAscending 
            size="25" 
            className="mx-2 icon"
            onClick={()=> this.props.sortList(this.state.key, direction.ASC)}
            title="ascending"
          />
          <AiOutlineSortDescending 
            size="25" 
            className="mx-2 icon"
            onClick={()=> this.props.sortList(this.state.key,direction.DESC)}
            title="descending"
          />
        </div>
      </div>
    )
  }
}

SortControls.propTypes = {
  sortList: PropTypes.func.isRequired,
};

export default SortControls;
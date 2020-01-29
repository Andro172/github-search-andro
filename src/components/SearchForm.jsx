import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearch } from 'react-icons/fa';
import { gql } from 'apollo-boost';
import { Mutation } from "react-apollo";

const SEARCH = gql`
  mutation search($searchTerm: String!) {
    search(searchTerm: $searchTerm) @client
  }
`;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(evt, search) {
    evt.preventDefault();
    window.scrollTo(0,0);
    search();
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <Mutation mutation={SEARCH} variables={{ searchTerm }}>
        {search => (
          <Form inline className="ml-auto mr-md-3 mr-lg-5" onSubmit={(evt) => this.handleSubmit(evt,search)}>
            <FormControl 
              type="text" 
              placeholder="Search Github" 
              name="searchTerm" 
              className="mr-sm-2 w-auto" 
              onChange={this.handleChange}
              value={this.state.searchTerm}
            />
            <button type="submit" style={{background:"transparent", border: "none"}}>
              <FaSearch className="blue-font" size="20" />
            </button>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default SearchForm;

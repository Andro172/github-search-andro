import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearch } from 'react-icons/fa';
import { SEARCH } from '../provider/queries';
import { Mutation } from "react-apollo";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handle input change
   * @param {object} evt 
   */
  handleChange(evt){
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    })
  }

  /**
   * Scroll to top of page and add searchTerm to client store
   * @param {object} evt 
   * @param {function} search 
   */
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
              placeholder="Type username" 
              name="searchTerm" 
              className="mr-sm-2 w-auto" 
              onChange={this.handleChange}
              value={this.state.searchTerm}
            />
            <button type="submit" style={{background:"transparent", border: "none"}}>
              <FaSearch className="yellow-font icon" size="20" />
            </button>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default SearchForm;

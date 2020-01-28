import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearch } from 'react-icons/fa';

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

  async handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.searchTerm,"search github")
  }

  render() {
    return (
      <Form inline className="ml-auto mr-md-3 mr-lg-5" onSubmit={this.handleSubmit}>
        <FormControl 
          type="text" 
          placeholder="Search Github" 
          name="searchTerm" 
          className="mr-sm-2" 
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <button type="submit" style={{background:"transparent", border: "none"}}>
          <FaSearch className="blue-font" size="20" />
        </button>
      </Form>
    );
  }
}

export default SearchForm;

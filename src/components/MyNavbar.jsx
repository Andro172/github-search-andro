import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';

function MyNavbar() {
    return (
      <div>
        <Navbar
          fixed="top"
          className={`nav-info`}
        >
          <Navbar.Brand className="brand ml-lg-5 ml-md-3 d-none d-sm-block">
            <NavLink className="link" to="/">Github Search</NavLink>
          </Navbar.Brand>

          <SearchForm />
        </Navbar>
      </div>
    );
}

export default MyNavbar;

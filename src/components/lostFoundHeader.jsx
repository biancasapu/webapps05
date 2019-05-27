import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand logo" href="#">
          Petabase
        </a>

        <a class="nav-link" href="#">
          Dashboard <span class="sr-only">(current)</span>
        </a>

        <a class="nav-link" href="#">
          Lost & Found
        </a>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Header;

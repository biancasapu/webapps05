import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <h class="navbar-brand logo">Petabase</h>

        <a class="nav-link" href="#">
          Dashboard <span class="sr-only">(current)</span>
        </a>

        <a class="nav-link" href="#">
          Lost & Found
        </a>
      </nav>
    );
  }
}

export default Header;

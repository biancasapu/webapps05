import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LostFoundPage from "./lostFoundPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2> Home </h2>
  },
  {
    path: "/Lost-and-Found",
    main: () => <LostFoundPage />
  }
];

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <h class="navbar-brand logo">Petabase</h>
        <Router>
          <div>
            <Link class="nav-link" to="/">
              Dashboard <span class="sr-only">(current)</span>
            </Link>

            <Link class="nav-link" to="/Lost-and-Found">
              Lost & Found
            </Link>

            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </div>

          <div>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </div>
        </Router>
      </nav>
    );
  }
}

export default Header;

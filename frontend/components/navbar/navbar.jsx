import React from "react";
import { Link } from "react-router-dom";
// import Search from "../search/search";
import SearchContainer from "../search/search_container";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.greeting = this.greeting.bind(this);
  }

  sessionLinks() {
    return (
      <div className="nav-link">
        <p>
          <Link className="logging" to="/login">
            Log In
          </Link>
        </p>
        <p>
          <Link className="logging" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    );
  }

  greeting() {
    return (
      <div className="nav-link">
        <p className="logging">
          <Link className="logging" to="/">
            Home
          </Link>
        </p>
        <p onClick={this.props.logout}>
          <Link className="logging" to="/">
            Log Out
          </Link>
        </p>
      </div>
    );
  }

  searchbar() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    );
  }

  render() {
    const greeting = this.props.currentUser
      ? this.greeting()
      : this.sessionLinks();

    return (
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">
            <div className="logo">
              <div className="logo-std">
                <img src={window.images.logo} />
              </div>
              <div className="logo-hov">
                <img src={window.images.logoHover} />
              </div>
            </div>
          </Link>

          {this.props.currentUser ? <SearchContainer /> : null}
        </div>
        {greeting}
      </div>
    );
  }
}

export default Navbar;

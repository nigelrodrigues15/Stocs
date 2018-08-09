import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.greeting = this.greeting.bind(this);
  }

  sessionLinks() {
    return (
      <div className="nav-link">
        <p>
          <Link to="/login">Log In</Link>
        </p>
        <p>
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }

  greeting() {
    return (
      <div className="nav-link">
        <p>Home</p>
        <p onClick={this.props.logout}>
          <Link to="/">Log Out</Link>
        </p>
      </div>
    );
  }

  render() {
    const greeting = this.props.currentUser
      ? this.greeting()
      : this.sessionLinks();

    return (
      <div className="navbar">
        <Link to="/">
          <img src={window.images.logo} />
        </Link>
        {greeting}
      </div>
    );
  }
}

export default Navbar;

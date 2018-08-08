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
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    );
  }

  greeting() {
    return (
      <div className="nav-link" >
        <p className="home">Home</p>
        <p onClick={this.props.logout}>
          <Link to="/">Log Out</Link>
        </p>
      </div>
    );
  }

  render() {
    const func = this.props.currentUser ? this.greeting() : this.sessionLinks();

    return (
      <div className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Robinhood_Logo.png" />
        {func}
      </div>
    );
  }
}

export default Navbar;

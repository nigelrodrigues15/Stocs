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
          <Link className="logging" to="/login">Log In</Link>
        </p>
        <p>
          <Link className="logging" to="/signup">Sign up</Link>
        </p>
      </div>
    );
  }

  greeting() {
    return (
      <div className="nav-link">
        <p className="logging">Home</p>
        <p onClick={this.props.logout}>
          <Link className="logging" to="/">Log Out</Link>
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
        <div className="logo">
        <logo className="logo-std"> <img src={window.images.logo} /> </logo>
        <logo className="logo-hov"> <img src={window.images.logoHover} /> </logo>
        </div>
        </Link>
        {greeting}
      </div>
    );
  }
}

export default Navbar;


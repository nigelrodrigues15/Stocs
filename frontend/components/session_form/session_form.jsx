import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fname: "",
      lname: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogging = this.demoLogging.bind(this);

    this.demoUser = {
      fname: "Nigel",
      lname: "Rodrigues",
      email: "nigel1@ualberta.ca",
      username: "nigel",
      password: "0123456789"
    };
  }

  componentWillMount() {
    this.props.removeErrors();
  }

  update(type) {
    return event => this.setState({ [type]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoLogging() {
    this.setState(this.demoUser);
    this.props.processForm(this.demoUser).then(() => this.props.history.push("/"));
  }

  signupForm() {
    return (
      <div className="signup-form">
        <br />
        <input
          type="text"
          value={this.state.fname}
          onChange={this.update("fname")}
          className="input-name"
          placeholder="First Name"
        />

        <input
          type="text"
          value={this.state.lname}
          onChange={this.update("lname")}
          className="input-name"
          placeholder="Last Name"
        />
        <br />
        <input
          type="email"
          value={this.state.email}
          onChange={this.update("email")}
          className="input"
          placeholder="Email address"
        />
      </div>
    );
  }

  loginForm() {
    return (
      <div className="login-form">
        <input
          type="text"
          value={this.state.username}
          onChange={this.update("username")}
          className="input"
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={this.state.password}
          onChange={this.update("password")}
          className="input"
          placeholder="Password (min. 10 characters)"
        />
      </div>
    );
  }

  demoLogin() {
    return (
      <div className="demo">
        <div className="switch-login">
          <Link to="/signup">
            <h3> Sign Up</h3>
          </Link>
        </div>
        <div onClick={() => this.demoLogging()} className="demo-login">
          <Link to="#">
            <h3>Demo User</h3>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    let greeting;
    let button;
    if (this.props.formType === "signup") {
      greeting = "Sign Up to Learn About Stocs";
      button = "Sign Up";
    } else {
      greeting = "Welcome to Stocs";
      button = "Log In";
    }

    return (
      <div className="login-form-container">
        <div className="form-container">
          <br />
          <h2>{greeting}</h2>
          <form onSubmit={this.handleSubmit}>
            {this.props.formType === "signup" ? this.signupForm() : null}
            {this.loginForm()}
            {this.props.errors === [] ? null : this.renderErrors()}
            <input
              className="input session-submit"
              type="submit"
              value={button}
            />
          </form>
          {this.props.formType === "signup" ? null : this.demoLogin()}
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);

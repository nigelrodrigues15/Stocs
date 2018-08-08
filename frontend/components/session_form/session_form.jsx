import React from "react";
import { withRouter } from "react-router-dom";

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
  }

  update(type) {
    return event => this.setState({ [type]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));;
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  signupForm() {
    return (
      <div className="signup-form">
        <br />
        <input
          type="text"
          value={this.state.fname}
          onChange={this.update("fname")}
          className="input input-name"
          placeholder="First Name"
        />

        <input
          type="text"
          value={this.state.lname}
          onChange={this.update("lname")}
          className="input input-name"
          placeholder="Last Name"
        />
        <br />
        <input
          type="text"
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
        <br />
        <input
          className="session-submit"
          type="submit"
          value={this.props.formType}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <br />
          Please {this.props.formType}
          {this.props.formType === "signup" ? this.signupForm() : null}
          {this.loginForm()}
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

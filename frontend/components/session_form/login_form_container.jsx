import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "login"
    // navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

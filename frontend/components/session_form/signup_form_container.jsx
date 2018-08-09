import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup, removeErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, removeErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

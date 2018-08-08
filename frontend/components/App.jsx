import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";

const App = () => (
  <div>
    <h1>Robinhood Clone</h1>
    <Route path="/signup" component={ SignupFormContainer } />
    <Route path="/login" component={ LoginFormContainer } />
  </div>
);

export default App;

import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import NavbarContainer from './navbar/navbar_container';


const App = () => (
  <div>
    <NavbarContainer />
    <Route path="/signup" component={ SignupFormContainer } />
    <Route path="/login" component={ LoginFormContainer } />
  </div>
);

export default App;

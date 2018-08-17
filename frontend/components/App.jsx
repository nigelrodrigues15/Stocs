import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import SearchContainer from "./search/search_container";
import NavbarContainer from "./navbar/navbar_container";
import CompanyContainer from "./company/company_container";
import DashboardContainer from "./dashboard/dashboard_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <NavbarContainer />

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/company/:companyId/:companySymbol" component={CompanyContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;

{/* <Route path="/" component={SearchContainer} /> */}
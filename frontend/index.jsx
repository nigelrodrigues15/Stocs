<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Its working :) </h1>, root);
});
=======
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

//Temporary for testing
import { login, logout, signup } from "./util/session_api_util";
//End testing

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  //Bootstrap CurrentUser
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);

  //Temporary for testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //End testing
});
>>>>>>> userAuth

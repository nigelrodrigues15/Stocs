import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

//Temporary for testing
import { login, logout, signup } from "./util/session_api_util";
import { fetchCompanies, fetchCompany, updateLastSale } from "./util/company_api_util";
import {
  getStock,
  currentStock,
  fetchChart,
  fetchCompanyDetails,
  fetchStats,
  fetchLogo,
  fetchNews,
  fetchPeers,
  fetchPrice,
  fetchChange
} from "./util/stocks_api_util";
import merge from "lodash/merge";
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

  window.merge = merge;

  window.fetchCompanies = fetchCompanies;
  window.fetchCompany = fetchCompany;
  window.updateLastSale = updateLastSale;

  window.getStock = getStock;
  window.currentStock = currentStock;
  window.fetchChart = fetchChart;
  window.fetchCompanyDetails = fetchCompanyDetails;
  window.fetchStats = fetchStats;
  window.fetchLogo = fetchLogo;
  window.fetchNews = fetchNews;
  window.fetchPeers = fetchPeers;
  window.fetchPrice = fetchPrice;
  window.fetchPrice = fetchPrice;
  window.fetchChange = fetchChange;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //End testing
});

import merge from "lodash/merge";
import { combineReducers } from "redux";
import {
  RECEIVE_CHART,
  RECEIVE_COMPANY_DETAILS,
  RECEIVE_STATS,
  RECEIVE_LOGO,
  RECEIVE_NEWS,
  RECEIVE_PEERS,
  RECEIVE_PRICE
} from "../actions/stock_actions";

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
// debugger
  switch (action.type) {
    case RECEIVE_CHART:
      return merge(newState, action.chart);

    case RECEIVE_COMPANY_DETAILS:
      return action.details;

    case RECEIVE_STATS:
      return action.stats;

    case RECEIVE_LOGO:
      return action.logo;

    case RECEIVE_NEWS:
      return action.news;

    case RECEIVE_PEERS:
      return action.peers;

    case RECEIVE_PRICE:
      // debugger
      return merge(newState, {price: action.price});

    default:
      return state;
  }
};

export default stocksReducer;

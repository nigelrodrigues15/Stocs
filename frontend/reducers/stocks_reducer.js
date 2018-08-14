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
      return merge(newState, { chart: action.chart });

    case RECEIVE_COMPANY_DETAILS:
      return merge(newState, { details: action.details });

    case RECEIVE_STATS:
      return merge(newState, { stats: action.stats });

    case RECEIVE_LOGO:
      return merge(logo, { price: action.logo });

    case RECEIVE_NEWS:
      return merge(newState, { news: action.news });

    case RECEIVE_PEERS:
      return merge(newState, { peers: action.peers });

    case RECEIVE_PRICE:
      return merge(newState, { price: action.price });

    default:
      return state;
  }
};

export default stocksReducer;

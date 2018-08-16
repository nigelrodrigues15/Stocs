import merge from "lodash/merge";
import { RECEIVE_WATCHLIST, REMOVE_WATCHLIST, RECEIVE_WATCHLISTS } from "../actions/watchlist_actions";

const watchlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {

    case RECEIVE_WATCHLIST:
      return action.payload;

    case REMOVE_WATCHLIST:
    return action.payload;

    case RECEIVE_WATCHLISTS:
    return action.payload;

    default:
      return state;
  }
};

export default watchlistReducer;

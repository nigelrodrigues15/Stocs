import merge from "lodash/merge";
import { RECEIVE_COMPANIES, RECEIVE_COMPANY } from "../actions/company_actions";

const companyReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {

    case RECEIVE_COMPANIES:
      return action.companies;

    case RECEIVE_COMPANY:
      return merge(newState, { [action.company.id]: action.company });

    default:
      return state;
  }
};

export default companyReducer;

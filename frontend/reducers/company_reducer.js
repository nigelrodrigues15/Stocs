import merge from "lodash/merge";
import { RECEIVE_COMPANIES, RECEIVE_COMPANY } from "../actions/company_actions";

const companyReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
//   debugger
  switch (action.type) {

    case RECEIVE_COMPANIES:
      return action.companies;

    case RECEIVE_COMPANY:
      return merge(newState, action.company );

    default:
      return state;
  }
};

export default companyReducer;

// [action.company.id]: action.company
import { connect } from "react-redux";
import { fetchCompanies, fetchCompany } from "../../actions/company_actions";
import Search from './search';

const mapStateToProps = state => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    companies: Object.values(state.companies)
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: companyId => dispatch(fetchCompany(companyId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

import { connect } from "react-redux";
import { fetchCompanies, fetchCompany } from "../../actions/company_actions";
import Search from './search';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    companies: Object.values(state.companies)
  };
};

const mapDispatchToProps = dispatch => {
  return {
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: companyId => dispatch(fetchCompany(companyId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

import { connect } from "react-redux";
import { fetchCompanies, fetchCompany } from "../../actions/company_actions";
import Company from "./company";

const mapStateToProps = state => {
    // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    company: state.companies,
    // company: state.companies.id
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
)(Company);

import { connect } from 'react-redux';
import { fetchCompanies, fetchCompany } from '../../actions/company_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
}

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: companyId => dispatch(fetchCompany(companyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
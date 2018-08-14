import { connect } from "react-redux";
import { fetchCompanies, fetchCompany } from "../../actions/company_actions";
import { createWatchlist, showWatchlist, removeWatchlist } from "../../actions/watchlist_actions";
import { fetchChart, fetchCompanyDetails, fetchStats,
  fetchLogo, fetchNews, fetchPeers, fetchPrice } from "../../actions/stock_actions";
import Company from "./company";

const mapStateToProps = (state, ownprops) => {
    // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    company: state.companies[parseInt(ownprops.match.params.companyId)],
    stocks: state.stocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompanies: () => dispatch(fetchCompanies()),
    fetchCompany: companyId => dispatch(fetchCompany(companyId)),
    fetchChart: (sym,chartRange) => dispatch(fetchChart(sym,chartRange)),
    fetchCompanyDetails: sym => dispatch(fetchCompanyDetails(sym)),
    fetchStats: sym => dispatch(fetchStats(sym)),
    fetchLogo: sym => dispatch(fetchLogo(sym)),
    fetchNews: (sym, num) => dispatch(fetchNews(sym, num)),
    fetchPeers: sym => dispatch(fetchPeers(sym)),
    fetchPrice: sym => dispatch(fetchPrice(sym)),
    createWatchlist: watchlistId => dispatch(createWatchlist(watchlistId)),
    showWatchlist: () => dispatch(showWatchlist()),
    removeWatchlist: watchlistId => dispatch(removeWatchlist(watchlistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);

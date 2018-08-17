import { connect } from "react-redux";
import { fetchCompanies, fetchCompany } from "../../actions/company_actions";
import { createWatchlist, showWatchlist, removeWatchlist } from "../../actions/watchlist_actions";
import {
  fetchChart, fetchCompanyDetails, fetchStats, fetchChange,
  fetchLogo, fetchNews, fetchPeers, fetchPrice } from "../../actions/stock_actions";
import Chart from "./chart";

const mapStateToProps = (state, ownprops) => {
  return {
    currentUser: state.entities.users[state.session.id],
    stocks: state.stocks,
    watchlist: state.watchlists
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
    fetchChange: sym => dispatch(fetchChange(sym)),
    createWatchlist: watchlistId => dispatch(createWatchlist(watchlistId)),
    showWatchlist: () => dispatch(showWatchlist()),
    removeWatchlist: watchlistId => dispatch(removeWatchlist(watchlistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);

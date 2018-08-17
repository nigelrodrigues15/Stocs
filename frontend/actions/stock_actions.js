import * as StockAPIUtil from "../util/stocks_api_util";

export const RECEIVE_CHART = "RECEIVE_CHART";
export const fetchChart = (sym, chartRange) => dispatch =>
  StockAPIUtil.fetchChart(sym, chartRange).then(chart =>
    dispatch(receiveChart(chart))
  );
export const receiveChart = chart => {
  return {
    type: RECEIVE_CHART,
    chart
  };
};

export const RECEIVE_COMPANY_DETAILS = "RECEIVE_COMPANY_DETAILS";
export const fetchCompanyDetails = sym => dispatch =>
  StockAPIUtil.fetchCompanyDetails(sym).then(details =>
    dispatch(receiveCompanyDetails(details))
  );
export const receiveCompanyDetails = details => {
  return {
    type: RECEIVE_COMPANY_DETAILS,
    details
  };
};

export const RECEIVE_STATS = "RECEIVE_STATS";
export const fetchStats = sym => dispatch =>
  StockAPIUtil.fetchStats(sym).then(stats => dispatch(receiveStats(stats)));
export const receiveStats = stats => {
  return {
    type: RECEIVE_STATS,
    stats
  };
};

export const RECEIVE_LOGO = "RECEIVE_LOGO";
export const fetchLogo = sym => dispatch =>
  StockAPIUtil.fetchlogo(sym).then(logo => dispatch(receiveLogo(logo)));
export const receiveLogo = logo => {
  return {
    type: RECEIVE_IWM,
    logo
  };
};

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const fetchNews = (sym, num) => dispatch =>
  StockAPIUtil.fetchNews(sym, num).then(news => dispatch(receiveNews(news)));
export const receiveNews = news => {
  return {
    type: RECEIVE_NEWS,
    news
  };
};

export const RECEIVE_DASHBOARD_NEWS = "RECEIVE_DASHBOARD_NEWS";
export const fetchDashboardNews = () => dispatch =>
  StockAPIUtil.fetchDashboardNews().then(dashboardNews =>
    dispatch(receiveDashbaordNews(dashboardNews))
  );
export const receiveDashbaordNews = dashboardNews => {
  return { type: RECEIVE_DASHBOARD_NEWS, dashboardNews };
};

export const RECEIVE_PEERS = "RECEIVE_PEERS";
export const fetchPeers = sym => dispatch =>
  StockAPIUtil.fetchPeers(sym).then(peers => dispatch(receivePeers(peers)));
export const receivePeers = peers => {
  return {
    type: RECEIVE_PEERS,
    peers
  };
};

export const RECEIVE_PRICE = "RECEIVE_PRICE";
export const fetchPrice = sym => dispatch =>
  StockAPIUtil.fetchPrice(sym).then(price => dispatch(receivePrice(price)));
export const receivePrice = price => {
  return {
    type: RECEIVE_PRICE,
    price
  };
};

export const RECEIVE_CHANGE = "RECEIVE_CHANGE";
export const fetchChange = sym => dispatch =>
  StockAPIUtil.fetchChange(sym).then(change => dispatch(receiveChange(change)));
export const receiveChange = change => {
  return { type: RECEIVE_CHANGE, change };
};

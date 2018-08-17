import React from "react";
import { Link, withRouter } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.watchlists = this.watchlists.bind(this);
    this.dashboardNews = this.dashboardNews.bind(this);
    // this.news = this.news.bind(this);
  }

  componentDidMount() {
    this.props.showWatchlist();
    this.props.fetchDashboardNews();
    // this.props.fetchNews("TSLA", 4);
  }

  selectCompany(companyId, companySymbol) {
    if (companyId === undefined) {
      return null;
    }

    return () => {
      this.props.history.push(`/company/${companyId}/${companySymbol}`);
    };
  }
  dashboardNews(n) {
    let result = this.props.stocks.dashboardNews.articles.map((article, i) => {
      if (i >= n) return null;
      return (
        <div key={i} className="articles">
          <div className="image-container">
            <i class="far fa-newspaper" />
          </div>
          <a key={i} href={article.url}>
            <li>
              <h2>{article.title}</h2>
              <br />
              <p>{article.source.name}</p>
            </li>
          </a>
        </div>
      );
    });
    return result;
  }

  news() {
    let result = this.props.stocks.news.map((article, i) => {
      return (
        <div key={i} className="articles">
          <div className="image-container">
            <img src={article.image ? article.image : window.images.logo} />
          </div>
          <a key={i} href={article.url}>
            <li>
              <h2>{article.headline}</h2>
              <br />
              <p>{article.source}</p>
            </li>
          </a>
        </div>
      );
    });
    return result;
  }
  watchlists() {
    if (this.props.watchlists.length === 0) return null;
    if (Object.keys(this.props.companies).length === 0) return null;
    let result = this.props.watchlists.map((watchlist, i) => {
      return (
        <li
          key={i}
          onClick={this.selectCompany(
            watchlist.company_id,
            this.props.companies[watchlist.company_id].symbol
          )}
          className="watchlist-company"
        >
          {this.props.companies[watchlist.company_id].symbol}
        </li>
      );
    });
    return result;
  }

  render() {
    // if (this.props.company === undefined) return null;
    // if (Object.keys(this.props.stocks).length < 1) return null;
    if (this.props.stocks.dashboardNews === undefined) return null;

    return (
      <div className="dashboard">
        <div />
        <div className="dashboard-home">
          <h1 className="dashboard-welcome">Welcome to Stocs</h1>
          <img src={window.images.staticGraph} alt="" />
          <div className="dashboard-news">
            <br />
            <h1>Recent News</h1>
            <ul>{this.dashboardNews(4)}</ul>
          </div>
        </div>
        <div className="dashboard-watchlists">
          <ul>
            {/* <li className="watchlist-title">Watchlist Stocks</li> */}
            {this.watchlists()}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);

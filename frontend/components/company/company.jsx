import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as StockAPIUtil from "../../util/stocks_api_util";
import {
  receivePrice,
  receiveCompanyDetails,
  receiveChart
} from "../../actions/stock_actions";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartRange: "1d",
      companyId: this.props.match.params.companyId
    };
    this.toggleWatchlist = this.toggleWatchlist.bind(this);
    this.ajaxcalls = this.ajaxcalls.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.company !== undefined) {
      if (nextProps.match.params.companyId != this.props.company.id) {
        this.ajaxcalls(nextProps.match.params.companyId);
      }
    }
  }

  ajaxcalls(companyId) {
    let companySymbol;
    this.props
      .fetchCompany(companyId)
      .then(action => {
        companySymbol = action.company.symbol;
        StockAPIUtil.fetchPrice(action.company.symbol).then(price =>
          dispatch(receivePrice(price))
        );
      })
      .then(action =>
        StockAPIUtil.fetchCompanyDetails(companySymbol).then(details =>
          dispatch(receiveCompanyDetails(details))
        )
      )
      .then(action =>
        StockAPIUtil.fetchChart(companySymbol, "1d").then(chart =>
          dispatch(receiveChart(chart))
        )
      );

    this.props.showWatchlist();
  }

  componentDidMount() {
    this.ajaxcalls(this.props.match.params.companyId);
    console.log("component is mounting...");
  }

  toggleWatchlist() {
    if (this.props.watchlist === undefined) {
      this.props.createWatchlist(this.props.match.params.companyId);
    } else {
      this.props.removeWatchlist(this.props.match.params.companyId);
    }
  }

  render() {
  //  debugger
    if (this.props.company === undefined) return null;
    if (Object.keys(this.props.stocks).length < 3) return null;
    if (this.props.watchlist === undefined) {
      this.watchlistButton = "Add to Watchlist";
      this.color = "green";
    } else {
      this.watchlistButton = "Remove from Watchlist";
      this.color = "red";
    }
    // if (this.props.stocks.price === undefined) return null;
    // debugger
    return (
      <div className="company-detail">
        <img src={window.images.staticGraph} alt="" />
        <br />
        <div>
          <h1>{this.props.company.name}</h1>
          <h2>${this.props.stocks.price}</h2>
        </div>
        <br />
        <div>
          <h1>About</h1>
          <p>{this.props.stocks.details.description}</p>
          <h3>CEO</h3>
          <p>{this.props.stocks.details.CEO}</p>
          <h3>Sector</h3>
          <p>{this.props.stocks.details.sector}</p>
          <h3>Website</h3>
          <p>{this.props.stocks.details.website}</p>
        </div>
        <br />
        <br />
        <input
          className={`watchlist-button ${this.color}`}
          type="button"
          onClick={this.toggleWatchlist}
          value={this.watchlistButton}
        />
      </div>
    );
  }
}

export default withRouter(Company);

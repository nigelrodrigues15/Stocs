import React from "react";
import { Link, withRouter } from "react-router-dom";
import ChartContainer from "../chart/chart_container";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.ajaxcalls = this.ajaxcalls.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.company !== undefined) {
      if (nextProps.match.params.companyId != this.props.company.id) {
        this.ajaxcalls(
          nextProps.match.params.companyId,
          nextProps.match.params.companySymbol
        );
      }
    }
  }

  ajaxcalls(companyId, companySymbol) {
    // let companySymbol;
    // this.props
    //   .fetchCompany(companyId)
    //   .then(action => {
    //     companySymbol = action.company.symbol;
    //     StockAPIUtil.fetchPrice(action.company.symbol).then(price =>
    //       dispatch(receivePrice(price))
    //     );
    //   })
    //   .then(action =>
    //     StockAPIUtil.fetchCompanyDetails(companySymbol).then(details =>
    //       dispatch(receiveCompanyDetails(details))
    //     )
    //   )
    //   .then(action =>
    //     StockAPIUtil.fetchChart(companySymbol, "1d").then(chart =>
    //       dispatch(receiveChart(chart))
    //     )
    //   );
    this.props
      .fetchCompany(companyId)
      .then(() => this.props.fetchCompanyDetails(companySymbol))
      .then(() => this.props.fetchStats(companySymbol));
  }

  componentDidMount() {
    this.ajaxcalls(
      this.props.match.params.companyId,
      this.props.match.params.companySymbol
    );
  }

  color() {
    const change = document.getElementById("ogChange");
    if (change >= 0) {
      return "pos";
    } else {
      return "neg";
    }
  }

  marketCap(n) {
    // got from https://gist.github.com/MartinMuzatko/1060fe584d17c7b9ca6e

    if (n >= 1000) {
      var units = ["k", "M", "B", "T"];

      let unit = Math.floor((n.toFixed(0).length - 1) / 3) * 3;
      let num = (n / ("1e" + unit)).toFixed(2);
      let unitname = units[Math.floor(unit / 3) - 1];

      return num + unitname;
    }

    return n.toLocaleString();
  }

  render() {
    if (this.props.company === undefined) return null;
    if (this.props.stocks.details === undefined) return null;
    if (this.props.stocks.stats === undefined) return null;

    return <div className="company-detail">
        <div />
        <div className="company-chart">
          <ChartContainer />
        </div>
        <div />
        <div />
        <div>
          <h1>About</h1>
          <p>{this.props.stocks.details.description}</p>
          <br />
          <div className="additional-details">
            <div className="text">
              <h3>CEO</h3>
              <p>{this.props.stocks.details.CEO}</p>
            </div>
            <div className="text">
              <h3>Sector</h3>
              <p>{this.props.stocks.details.sector}</p>
            </div>
            <div className="text">
              <h3>Website</h3>
              <p>{this.props.stocks.details.website}</p>
            </div>
            <div className="text">
              <h3>Market Cap</h3>
              <p>{this.marketCap(this.props.stocks.stats.marketcap)}</p>
            </div>
            <div className="text">
              <h3>Dividend Yield</h3>
              <p>{this.props.stocks.stats.dividendYield.toFixed(2)}</p>
            </div>
            <div className="text">
              <h3>Return on Equity</h3>
              <p>
                {this.props.stocks.stats.returnOnEquity
                  ? this.props.stocks.stats.returnOnEquity.toFixed(2)
                  : null}
              </p>
            </div>
          </div>
        </div>
        <div />
        <div />
      <div className="attribution-iex">
          <p >Data provided for free by IEX. View IEX’s Terms of Use.</p>
        </div>
      </div>;
  }
}

export default withRouter(Company);

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
    this.props.fetchCompany(companyId);
    this.props.fetchCompanyDetails(companySymbol);
  }

  componentDidMount() {
    this.ajaxcalls(
      this.props.match.params.companyId,
      this.props.match.params.companySymbol
    );
  }

  render() {
    if (this.props.company === undefined) return null;
    if (Object.keys(this.props.stocks).length < 1) return null;

    // if (this.props.stocks.price === undefined) return null;
    return (
      <div className="company-detail">
        <div />
        <div className="company-chart">
          <ChartContainer />
        </div>
        <div />
        <div />
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
        <div />
        <div />
      </div>
    );
  }
}

export default withRouter(Company);

import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartRange: "1d"
    };
    this.chartData = this.chartData.bind(this);
    this.toggleWatchlist = this.toggleWatchlist.bind(this);
    this.ajaxcalls = this.ajaxcalls.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.companyId != this.props.match.params.companyId) {
      this.ajaxcalls(nextProps.match.params.companySymbol);
    }
  }

  componentDidMount() {
    this.ajaxcalls(this.props.match.params.companySymbol);
  }
  ajaxcalls(companySymbol) {
    this.props.fetchChart(companySymbol, this.state.chartRange);
    this.props.fetchPrice(companySymbol);
    this.props.fetchStats(companySymbol);
    this.props.fetchCompanyDetails(companySymbol);
    this.props.showWatchlist();
  }

  chartData() {
    let data = [];
    this.props.stocks.chart.forEach((el, i) => {
      if (!(el.marketAverage === -1)) {
        data.push({ x: i, y: el.marketAverage });
      }
    });
    return data;
  }

  color() {
    if (true) {
      return "#21ce99";
    } else {
      return "#E30000";
    }
  }

  toggleWatchlist() {
    if (Object.keys(this.props.watchlist).length === 0 || this.props.watchlist[this.props.match.params.companyId]===undefined) {
      this.props.createWatchlist(this.props.match.params.companyId);
    } else {
      this.props.removeWatchlist(this.props.match.params.companyId);
    }
  }

  chart() {

    return (
      <ResponsiveContainer width="100%" aspect={7.0 / 3.0}>
        <LineChart
          //   width={800}
          //   height={300}
          data={this.chartData()}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="y" stroke={this.color()} dot={false} />
          <XAxis dataKey="x" stroke="none" />
          <YAxis domain={["auto", "auto"]} stroke="none" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  render() {
    if (Object.keys(this.props.stocks).length < 4) return null;
    if (Object.keys(this.props.watchlist).length === 0 || this.props.watchlist[this.props.match.params.companyId]===undefined) {
        this.watchlistButton = "Add to Watchlist";
        this.colorClass = "green";
      } else {
        this.watchlistButton = "Remove from Watchlist";
        this.colorClass = "red";
      }
    return (
      <div className="chart-detail">
        <div className="company-info">
          <div className="company-display">
            <h2>{this.props.stocks.details.companyName}</h2>
            <h2>${this.props.stocks.price}</h2>
          </div>
          <div className="company-watchlist">
            <input
              className={`watchlist-button ${this.colorClass}`}
              type="button"
              onClick={this.toggleWatchlist}
              value={this.watchlistButton}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="chart">{this.chart()}</div>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Chart);

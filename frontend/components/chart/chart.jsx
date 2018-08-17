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
import CustomTooltip from "./custom_tooltip";
import Odometer from "react-odometerjs";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartRange: "1D"
    };
    this.chartData = this.chartData.bind(this);
    this.toggleWatchlist = this.toggleWatchlist.bind(this);
    this.ajaxcalls = this.ajaxcalls.bind(this);
    this.chartRangeButtons = this.chartRangeButtons.bind(this);
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
    this.props.fetchChange(companySymbol);
    this.props.fetchCompanyDetails(companySymbol);
    this.props.showWatchlist();
  }
  chartRangeButtons() {
    const chartRange = ['1D', '1M', '3M', '6M', '1Y', '2Y', '5Y'].map((range, i) => {
      return <li key={i}>
          <button onClick={() => this.ChartChange(range)}
          className={this.state.chartRange === range ? "current-range" : null}
          id="range-button" >
            {range}
          </button>
        </li>;
    });
    return chartRange;
  }

  ChartChange(range) {
    this.setState({ chartRange: range });
    this.props.fetchChart(this.props.match.params.companySymbol, this.state.chartRange);
  }

  chartData() {
    let data = [];
    this.props.stocks.chart.forEach((el, i) => {
      if (!(el.marketAverage === -1) && i%3 == 0) {
        data.push({ x: i, y: el.marketAverage });
      }
    });
    return data;
  }

  color() {
    if (this.props.stocks.change.quote.changePercent.toFixed(2) >= 0) {
      return "#21ce99";
    } else {
      return "#f45531";
    }
  }

  toggleWatchlist() {
    if (
      Object.keys(this.props.watchlist).length === 0 ||
      this.props.watchlist[this.props.match.params.companyId] === undefined
    ) {
      this.props.createWatchlist(this.props.match.params.companyId);
    } else {
      this.props.removeWatchlist(this.props.match.params.companyId);
    }
  }

  chart() {
    return <ResponsiveContainer width="100%" aspect={7.0 / 3.0}>
        <LineChart //   width={800}
          //   height={300}
          data={this.chartData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="y" stroke={this.color()} strokeWidth={2}  dot={false} />
          <XAxis dataKey="x" stroke="none" />
          <YAxis domain={["auto", "auto"]} stroke="none" />
          <Tooltip wrapperStyle={{ background: "transparent", border: "none", color: "lightgray" }} cursor={{ strokeWidth: 1 }} offset={-90} isAnimationActive={false} position={{ x: 0, y: 0 }} content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>;
  }
  render() {
    // if (Object.keys(this.props.stocks).length < 4) return null;
    // debugger
    if (this.props.stocks.details === undefined) return null;
    if (this.props.stocks.stats === undefined) return null;
    if (this.props.stocks.chart === undefined) return null;
    if (this.props.stocks.change === undefined) return null;
    if (this.props.stocks.price === undefined) return null;
    if (
      Object.keys(this.props.watchlist).length === 0 ||
      this.props.watchlist[this.props.match.params.companyId] === undefined
    ) {
      this.watchlistButton = "Add to Watchlist";
      this.colorClass = "green";
    } else {
      this.watchlistButton = "Remove from Watchlist";
      this.colorClass = "red";
    }
    let sign;
    let signClass;
    if (this.props.stocks.change.quote.changePercent.toFixed(2) >= 0) {
      sign = "+";
      signClass = "pos";
    } else {
      sign = "-";
      signClass = "neg";
    }

    return (
      <div className="chart-detail">
        <div className="company-info">
          <div className="company-display">
            <h1>{this.props.stocks.details.companyName}</h1>
            <h2 className="odometer" id="price">
              ${this.props.stocks.price.toFixed(2)}
            </h2>
            <h3 className={`${signClass}`} id="ogChange" >
              ({sign} {Math.abs(this.props.stocks.change.quote.changePercent).toFixed(2)})
            </h3>
            <h3 id="ogPrice">${this.props.stocks.price.toFixed(2)}</h3>
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
        <div className="chart">
        {this.chart()}
        <div className="range-div">
          <ul className='chart-ranges'>{this.chartRangeButtons()}</ul>
        </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Chart);

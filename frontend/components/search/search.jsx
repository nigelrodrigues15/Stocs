import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
// debugger
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ search: event.currentTarget.value });
  }

  selectCompany(companyId) {
    if (companyId === undefined) {
      return null;
    }

    return () => {
      this.props.history.push(`/company/${companyId}`);
      this.setState({ search: "" });
    };
  }

  matches() {
    let matches = [];

    if (this.state.search.length === 0) {
      return [];
    }

    this.props.companies.forEach(company => {
      const companySubstr = company.name.slice(0, this.state.search.length);
      const symbolSubstr = company.symbol.slice(0, this.state.search.length);

      if (
        companySubstr.toLowerCase() === this.state.search.toLowerCase() ||
        symbolSubstr.toLowerCase() === this.state.search.toLowerCase()
      ) {
        matches.push(company);
      }
    });

    if (matches.length === 0) {
      matches.push("No results available for your search");
    }

    return matches.slice(0, 5);
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectCompany(result.id)} id="company-search">
          {result.symbol} {result.name}
        </li>
      );
    });

    return (
      <div className="search-bar">
        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.search}
          placeholder="Search"
        />

        <ul className="results-search">
          <ReactCSSTransitionGroup
            transitionName="auto"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {results}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default withRouter(Search);

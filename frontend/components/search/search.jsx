import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleInput = this.handleInput.bind(this);
    // debugger
  }

  handleInput(event) {
    this.setState({ search: event.currentTarget.value });
  }

  componentDidMount() {
    // debugger
    console.log("Search mounting");
    
    this.props.fetchCompanies();
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
    if (!this.props.companies) return null;
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectCompany(result.id)} className="result-div"> 
          <p className="result-symbol">{result.symbol}</p>
          <p className="result-name">{result.name}</p>
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
        <br />
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

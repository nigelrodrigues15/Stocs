import React from "react";
import { Link, withRouter } from "react-router-dom";

class Company extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    // debugger;
    if (nextProps.match.params.companyId != this.props.company.id) {
      this.props.fetchCompany(nextProps.match.params.companyId);
    }
    if (this.props.company.id !== undefined) {
      // this.props.fetchPrice(this.props.sym)
    };
  }
  componentDidMount() {
    this.props.fetchCompany(this.props.match.params.companyId);
  }
  
  render() {
    
    if (this.props.company.id === undefined) return null;
    // if (this.props.stocks.price === undefined) return null;
    // debugger
    return (
      <div className="company-detail">
        <h1>{this.props.company.name}</h1>
        <h2>{this.props.company.symbol}</h2>
        <h3>{this.props.company.sector}</h3>
        <h3>{this.props.company.industry}</h3>
        <h3>${this.props.company.lastsale}</h3>
      </div>
    );
  }
}

export default withRouter(Company);

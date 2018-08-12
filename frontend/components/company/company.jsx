import React from "react";
import { Link, withRouter } from "react-router-dom";

class Company extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
  }
  //   componentWillReceiveProps(nextProps) {
  //     if (
  //       nextProps.match.params.companyId !== this.props.match.params.companyId
  //     ) {
  //       () => this.props.fetchCompany(nextProps.match.params.companyId);
  //     }
  //   }
  componentDidMount() {
    this.props.fetchCompany(this.props.match.params.companyId);
  }

  render() {
    debugger;
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

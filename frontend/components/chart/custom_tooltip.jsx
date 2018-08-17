import React from "react";

class CustomToolTip extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    const price = document.getElementById("price");
    const ogPrice = document.getElementById("ogPrice");
    // const performance = document.getElementById("performance");
    // const hiddenPerformance = document.getElementById("hidden-performance");
    if (this.props.active) {
      if (
        nextProps.payload &&
        nextProps.payload[0] &&
        nextProps.payload[0].payload
      ) {
        price.innerHTML = '$' + parseFloat(nextProps.payload[0].payload["y"]).toFixed(2);
      }
    } else {
      price.innerHTML = ogPrice.innerHTML;
      // performance.innerHTML = hiddenPerformance.innerHTML;
    }
  }

  render() {
    return null;
  }
}

export default CustomToolTip;

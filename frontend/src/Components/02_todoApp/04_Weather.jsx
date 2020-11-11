import React from "react";

class Weather extends React.Component {
  construction() {}
  render() {
    const { getw } = this.props;
    return <div>{getw.base}</div>;
  }
}

export default Weather;

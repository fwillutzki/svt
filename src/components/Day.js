import React, { Component } from "react";
import TextAndIcon from "./TextAndIcon";
import Diagrambox from "./Diagrambox";
class Day extends Component {
  render() {
    return (
      <div className="dagsdiv">
        <TextAndIcon
          wsymb={this.props.wsymb}
          tempNow={this.props.temperature}
          dagText={this.props.dagText}
        />
        <Diagrambox
          windData={this.props.windData}
          temperatureData1={this.props.temperatureDataDay}
        />
      </div>
    );
  }
}

export default Day;

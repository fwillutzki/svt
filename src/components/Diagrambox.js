import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Diagrambox extends Component {
  render() {
    return (
      <div>
        <div className="diagramdiv">
          <Line data={this.props.temperatureData} />
        </div>
        <div className="diagramdiv">
          <Line data={this.props.windData} />
        </div>
      </div>
    );
  }
}

export default Diagrambox;

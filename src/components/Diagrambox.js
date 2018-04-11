import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class Diagrambox extends Component {
  render() {
    return (
      <div>
        <Line data={this.props.temperatureData1} />
        <Bar data={this.props.windData} />
        <p>Diagram tre, moln</p>
        <p>Diagram fyra, regn</p>
      </div>
    );
  }
}

export default Diagrambox;

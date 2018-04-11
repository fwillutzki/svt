import React, { Component } from "react";
import "./App.css";
import Daylist from "./components/Daylist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Sales",
            type: "line",
            data: [51, 65, 40, 49, 60, 37, 40],
            fill: false,
            borderColor: "#EC932F",
            backgroundColor: "#EC932F",
            pointBorderColor: "#EC932F",
            pointBackgroundColor: "#EC932F",
            pointHoverBackgroundColor: "#EC932F",
            pointHoverBorderColor: "#EC932F",
            yAxisID: "y-axis-2"
          },
          {
            type: "bar",
            label: "Visitor",
            data: [200, 185, 590, 621, 250, 400, 95],
            fill: false,
            backgroundColor: "#71B37C",
            borderColor: "#71B37C",
            hoverBackgroundColor: "#71B37C",
            hoverBorderColor: "#71B37C",
            yAxisID: "y-axis-1"
          }
        ]
      },
      tempDiaOne: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      tempDiaTwo: {
        labels: [
          "January",
          "February",
          "March",
          "Avrile",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [100, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
      tempDiaThree: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My Third dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [0, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Daylist
          tempArrayDay1={this.state.tempDiaOne}
          tempArrayDay2={this.state.tempDiaTwo}
          tempArrayDay3={this.state.tempDiaThree}
          wsymbDayOne="1"
          wsymbDayTwo="4"
          wsymbDayThree="1"
          // windData={this.state.windData}
        />
      </div>
    );
  }
}

export default App;

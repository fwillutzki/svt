import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Day from "./components/Day";
import Navbar from "./components/Navbar";
import Fourofour from "./components/Fourofour";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windDataIdag: {
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
            label: "Stadigvarande vind",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Byvind",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(0,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [75, 69, 90, 91, 66, 65, 50]
          }
        ]
      },

      windDataImorgon: {
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
            label: "Stadigvarande vind",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Byvind",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(0,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [75, 69, 90, 91, 66, 65, 50]
          }
        ]
      },
      windDataOvermorgon: {
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
            label: "Stadigvarande vind",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Byvind",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(0,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [75, 69, 90, 91, 66, 65, 50]
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
            data: []
          }
        ]
      }
    };
  }
  componentDidMount() {
    const tempArrayIdag = [];
    const tempArrayImorgon = [];
    const tempArrayOvermorgon = [];
    const timeArrayIdag = [];
    const timeArrayImorgon = [];
    const timeArrayOvermorgon = [];
    const windspeedArrayIdag = [];
    const windspeedArrayImorgon = [];
    const windspeedArrayOvermorgon = [];
    const gustArrayIdag = [];
    const gustArrayImorgon = [];
    const gustArrayOvermorgon = [];
    const lonMalmo = 13.087616;
    const latMalmo = 55.436559;
    
    const url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lonMalmo}/lat/${latMalmo}/data.json`;
   
    //const url = `http://api.texttv.nu/api/get/100`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const idag = new Date();
        const idagString = idag.toLocaleString().slice(0, 10);
        const imorgon = new Date(idag.setDate(idag.getDate() + 1));
        const imorgonString = imorgon.toLocaleString().slice(0, 10);
        const overmorgon = new Date(imorgon.setDate(imorgon.getDate() + 1));
        const overmorgonString = overmorgon.toLocaleString().slice(0, 10);

        json.timeSeries.map(timeSeriesItem => {
          const { validTime, parameters } = timeSeriesItem;
          const tid = new Date(validTime);
          const tidString = `${tid.getDate().toString()}/${tid.getMonth() +
            1}, kl. ${tid.getHours().toString()}`;
          let temperature = parameters.filter(element => {
            return element.name === "t";
          })[0].values[0];
          let windspeed = parameters.filter(element => {
            return element.name === "ws";
          })[0].values[0];
          let gust = parameters.filter(element => {
            return element.name === "gust";
          })[0].values[0];
          if (validTime.startsWith(idagString)) {
            timeArrayIdag.push(tidString);
            tempArrayIdag.push(temperature);
            windspeedArrayIdag.push(windspeed);
            gustArrayIdag.push(gust);
          } else if (validTime.startsWith(imorgonString)) {
            tempArrayImorgon.push(temperature);
            timeArrayImorgon.push(tidString);
            windspeedArrayImorgon.push(windspeed);
            gustArrayImorgon.push(gust);
          } else if (validTime.startsWith(overmorgonString)) {
            tempArrayOvermorgon.push(temperature);
            timeArrayOvermorgon.push(tidString);
            windspeedArrayOvermorgon.push(windspeed);
            gustArrayOvermorgon.push(gust);
          }
        });

        this.setState(prevState => {
          prevState.windDataIdag.labels = timeArrayIdag;
          prevState.windDataIdag.datasets[0].data = windspeedArrayIdag;
          prevState.windDataIdag.datasets[1].data = gustArrayIdag;
          prevState.windDataImorgon.labels = timeArrayImorgon;
          prevState.windDataImorgon.datasets[0].data = windspeedArrayImorgon;
          prevState.windDataImorgon.datasets[1].data = gustArrayImorgon;
          prevState.windDataOvermorgon.labels = timeArrayOvermorgon;
          prevState.windDataOvermorgon.datasets[0].data = windspeedArrayOvermorgon;
          prevState.windDataOvermorgon.datasets[1].data = gustArrayOvermorgon;
          prevState.tempDiaOne.labels = timeArrayIdag;
          prevState.tempDiaOne.datasets[0].label = idagString;
          prevState.tempDiaOne.datasets[0].data = tempArrayIdag;
          prevState.tempDiaTwo.labels = timeArrayImorgon;
          prevState.tempDiaTwo.datasets[0].label = imorgonString;
          prevState.tempDiaTwo.datasets[0].data = tempArrayImorgon;
          prevState.tempDiaThree.labels = timeArrayOvermorgon;
          prevState.tempDiaThree.datasets[0].label = overmorgonString;
          prevState.tempDiaThree.datasets[0].data = tempArrayOvermorgon;
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              path = {process.env.PUBLIC_URL + "/"}
              exact
              render={props => (
                <Day
                  wsymb="1"
                  daynr="1"
                  dagtext="Idag"
                  temperature="fucking 1000"
                  temperatureDataDay={this.state.tempDiaOne}
                  windData={this.state.windDataIdag}
                />
              )}
            />
            <Route
              path = {process.env.PUBLIC_URL + "/imorgon"}
              render={props => (
                <Day
                  wsymb="2"
                  daynr="2"
                  dagtext="Imorgon"
                  temperature="19"
                  temperatureDataDay={this.state.tempDiaTwo}
                  windData={this.state.windDataImorgon}
                />
              )}
            />
            <Route
              path = {process.env.PUBLIC_URL + "/overmorgon"}
              render={props => (
                <Day
                  wsymb="4"
                  daynr="3"
                  dagtext="I &ouml;vermorgon"
                  temperature="23"
                  temperatureDataDay={this.state.tempDiaThree}
                  windData={this.state.windDataOvermorgon}
                />
              )}
            />
            <Route component={Fourofour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

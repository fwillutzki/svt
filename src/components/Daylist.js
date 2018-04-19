import React, { Component } from "react";
import Day from "./Day";

class Daylist extends Component {
  render() {
    return (
      <div>
        <Day
          daynr="1"
          wsymb={this.props.wsymbDayOne}
          dagText="Idag"
          temperature="11"
          temperatureDataDay={this.props.tempArrayDay1}
          windData={this.props.windDataIdag}
        />
        <Day
          daynr="2"
          wsymb={this.props.wsymbDayTwo}
          dagText="I morgon"
          temperature="19"
          temperatureDataDay={this.props.tempArrayDay2}
          windData={this.props.windDataImorgon}
        />
        <Day
          daynr="3"
          wsymb={this.props.wsymbDayThree}
          dagText="I &ouml;vermorgon"
          temperature="28"
          temperatureDataDay={this.props.tempArrayDay3}
          windData={this.props.windDataOvermorgon}
        />
      </div>
    );
  }
}

export default Daylist;

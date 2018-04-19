import React, { Component } from "react";

class TextAndIcon extends Component {
  render() {
    return (
      <div className="textAndIcon">
        <div className="wsymb">
          <img src={"images/" + this.props.wsymb + ".png"} alt="" />
        </div>
        <div className="textlager">
          <h2 className="weatherPlace">Malmö</h2>
          <p className="dagText">{this.props.dagText}</p>
          <p className="dagsTemp">{this.props.tempNow}&deg;</p>
          <p className="minMaxTemp">8&deg;/22&deg;</p>
          <p className="weatherType">Soligt</p>
        </div>
      </div>
    );
  }
}

export default TextAndIcon;

import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  render() {
    return <div id="display">{this.props.display}</div>;
  }
}

import React, { Component } from "react";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: []
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }
  handleKeydown = (e) => {
    if (e.keyCode === this.props.keytrigger.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handledisplay(this.props.id);
    }
  };
  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handledisplay(this.props.id);
  };
  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.keytrigger}</h1>
        <audio
          ref={(ref) => (this.audio = ref)}
          className="clip"
          id={this.props.keytrigger}
          src={this.props.src}
        ></audio>
      </div>
    );
  }
}

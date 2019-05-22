import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      minute: 0,
      second: 0
    };
  }
  componentDidMount() {
    setInterval(() => {
      return this.setState((state, props) => {
        return {
          second: state.second === 59 ? 0 : state.second + 1,
          minute: state.second === 59 ? state.minute + 1 : state.minute
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div className="stopwatch">
        <div>
          {" "}
          Time: {this.state.minute}:{this.state.second}{" "}
        </div>
        <button> Stop </button>
      </div>
    );
  }
}

export default Timer;

import React from "react";

class Timer extends React.Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2> {count} </h2>
      </div>
    );
  }
}

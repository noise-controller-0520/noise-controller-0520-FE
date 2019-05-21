import React from "react";

class Timer extends React.Component {
  state = {
    count: 0
  };

  componentDidMount(){
      this.myInterval = setInterval(() =>{
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
      }, 1000)
  }

  componentWillUnmount(){
      clearInterval(this.myInterval)
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2> Time: {count} </h2>
      </div>
    );
  }

}

export default Timer;

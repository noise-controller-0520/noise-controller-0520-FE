import React from "react";
import "./GamePage.css";
import { connect } from 'react-redux';
import { endGame } from '../../actions';
import MiniMenu from './MiniMenu';

import Audio from './Audio';

import './GamePage.css';

class GamePage extends React.Component {
  state = {
    timer: 0
  }

  endGame = id => {
    localStorage.setItem("class", id);

    this.props.endGame();

    this.props.history.push(`/scoreboard/${id}`);
  };

  render() {
    return (
      <div className="top-section">
        <div className="audio-style">
       <Audio />
       </div>

        <MiniMenu />
          
        <button onSubmit={this.endGame}> End Session </button>
        
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    timer: state.ScoresReducer.timer
  };
};

export default connect(
  mapStateToProps,
  { endGame }
)(GamePage);

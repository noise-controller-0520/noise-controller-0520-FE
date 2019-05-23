import React from "react";
import "./GamePage.css";
import { connect } from 'react-redux';
import { endGame } from '../../actions';

import MiniMenu from './MiniMenu';


class GamePage extends React.Component {

  endGame = id => {
    localStorage.setItem("class", id);

    this.props.endGame();
    this.props.history.push(`/scoreboard/${id}`);
  };

  render() {
    return (
      <div className="top-section">
        

        <MiniMenu />

        <div className="welcome-section">
          <div className="user-container">
            <div> Welcome... </div>
          </div>

          <div className="user-container">
            <div> Class... </div>
          </div>

          <button onSubmit={this.endGame}> End Session </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { endGame }
)(GamePage);

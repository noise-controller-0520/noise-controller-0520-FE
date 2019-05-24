import React from "react";
import "./GamePage.css";
import { connect } from 'react-redux';
import { endGame } from '../../actions';
import MiniMenu from './MiniMenu';
import { withRouter } from 'react-router-dom'

import Audio from './Audio';

import './GamePage.css';

class GamePage extends React.Component {
  // state = {
  //   timer: 0
  // }

  render() {
    return (
      <div className="top-section">
        <div className="audio-style">
          <Audio />
       </div>
       
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    timer: state.ScoresReducer.timer
  };
};

export default withRouter(connect(
  mapStateToProps,
  { endGame }
)(GamePage));

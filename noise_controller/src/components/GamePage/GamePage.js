import React from "react";
import "./GamePage.css";
import { withRouter } from 'react-router-dom'
import Audio from './Audio';
import './GamePage.css';

class GamePage extends React.Component {

  render() {
    return (
      
        <div className="audio-style">
          <Audio />
       </div>
       
   
    );
  }
}


export default withRouter(GamePage);

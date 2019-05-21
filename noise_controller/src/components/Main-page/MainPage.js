import React from "react";
import "./MainPage.css";
import Timer from '../Timer/Timer';

class MainPage extends React.Component {
  render() {
    return (
      <div className='top-section'>

        <div className="welcome-section">
          <div className="user-container">
            <div> Welcome... TeacherName </div>
          </div>

          <div className="user-container">
            <div> Class... ClassName </div>
          </div>
        </div>

        <div className='timer'>
        <Timer/>
        </div>


      </div>
    );
  }
}

export default MainPage;

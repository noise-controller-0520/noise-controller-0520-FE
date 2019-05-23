import React from "react";
import "./Classrooms.css";
import { withRouter } from 'react-router-dom';

function Classrooms(props) {
  console.log(props);

  const deleteClassroom = event => {
    event.preventDefault();

    props.deleteClassroom(props.classroom.id);
  };

  const startGame = id => {
      props.history.push(`/main-page/${id}`)
  }

  const checkScores = id => {
    localStorage.setItem('class', id)
    props.history.push(`/scoreboard/${id}`)
}

  return (
    <div className='classrooms'>
      
      
        <button className='classroom-button' onClick={() => startGame(props.classroom.id)} >{props.classroom.class_name}</button>

        <button className='classy-button' onClick={deleteClassroom} key={props.classroom.id}>
          Delete
        </button>

        <button className='classy-button' onClick={() => checkScores(props.classroom.id) }> 
            Check Scores
        </button>

        
      
    </div>
  );
}

export default withRouter(Classrooms);

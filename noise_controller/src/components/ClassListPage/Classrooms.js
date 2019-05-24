import React from "react";
import "./Classrooms.css";
import { withRouter } from 'react-router-dom';

function Classrooms(props) {
  console.log(props);
  // console.log(props.classroom.class_name);

  const deleteClassroom = event => {
    event.preventDefault();

    props.deleteClassroom(props.classroom.id);
  };

  const startGame = id => {
      props.history.push(`/game-page/${id}`)
  }

  const checkScores = (id, name) => {
    localStorage.setItem('class', id)
    localStorage.setItem('name', name)
    props.history.push(`/scoreboard/${id}`)
}

  return (
    <div className='classrooms'>
      
      
        <button className='classroom-button' onClick={() => startGame(props.classroom.id)} >{props.classroom.class_name}</button>

        <button className='classy-button' onClick={deleteClassroom} key={props.classroom.id}>
          Delete
        </button>

        <button className='classy-button' onClick={() => checkScores(props.classroom.id, props.classroom.class_name) }> 
            Check Scores
        </button>

        
      
    </div>
  );
}

export default withRouter(Classrooms);

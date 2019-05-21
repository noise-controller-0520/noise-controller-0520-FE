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

  return (
    <div>
      <h3>
        <button onClick={() => startGame(props.classroom.id)} >{props.classroom.class_name}</button>

        <button onClick={deleteClassroom} key={props.classroom.id}>
          Delete Classroom
        </button>
      </h3>
    </div>
  );
}

export default withRouter(Classrooms);

import React from "react";

import './Classrooms.css';

function Classrooms(props) {
    
  const deleteClassroom = event => {
    event.stopPropagation();

    props.deleteClassroom(props.classroom.id);
  };


  return (
    <div>
      <h3>

        {props.classroom.classroom}

        <button onClick={deleteClassroom} key={props.classroom.id}>
        Delete Classroom
      </button>

      </h3>
    </div>
  );
}

export default Classrooms;

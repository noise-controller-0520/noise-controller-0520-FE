import React from "react";

import './Classrooms.css';

function Classrooms(props) {
    console.log(props)
    
  const deleteClassroom = event => {
    event.stopPropagation();

    props.deleteClassroom(props.classroom.id);
  };


  return (
    <div>
      <h3>

        {props.classroom.class_name}

        <button onClick={deleteClassroom} key={props.classroom.id}>
        Delete Classroom
      </button>

      </h3>
    </div>
  );
}

export default Classrooms;

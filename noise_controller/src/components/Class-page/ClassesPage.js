import React from "react";

import { connect } from "react-redux";
import { addClassroom, deleteClassroom, getClassroom } from "../../actions";
import Classrooms from "./Classrooms";
import "./ClassesPage.css";

class ClassesPage extends React.Component {
  state = {
    classrooms: [],
    inputField: ""
  };

  handleChanges = e => {
    this.setState({
      inputField: e.target.value
    });
  };


  componentDidMount() {
    const teacherId = localStorage.getItem("teacher");
    this.props.getClassroom(teacherId);
  }

  addClassroom = e => {
    e.preventDefault();

    this.props.addClassroom(this.state.inputField);
    this.setState({ inputField: "" });
  };

  deleteClassroom = id => {
    this.props.deleteClassroom(id);
  };

  render() {
    console.log(this.state.classrooms);
    return (
      <div>
        <div className="classrooms-list">
          {this.props.classrooms && this.props.classrooms.map(classroom => (
            <Classrooms
              classroom={classroom}
              deleteClassroom={this.deleteClassroom}
            />
          ))}
        </div>

        <input
          value={this.state.newClassroom}
          onChange={this.handleChanges}
          placeholder="Add another class..."
        />

        <button onClick={this.addClassroom}> Add </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classrooms: state.classrooms
  };
};

export default connect(
  mapStateToProps,
  { addClassroom, deleteClassroom, getClassroom }
)(ClassesPage);

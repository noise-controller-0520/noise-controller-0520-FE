import React from "react";

import { connect } from "react-redux";
import { addClassroom, removeClassroom, toggleClassroom } from "../../actions";

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

  addClassroom = e => {
    e.preventDefault();

    this.props.addClassroom(this.state.inputField);
    this.setState({ inputField: "" });
  };

  toggleClassroom = id => {
    this.props.toggleClassroom(id);
  };

  removeClassroom = id => {
    this.props.removeClassroom(id);
  };

  render() {
    return (
      <div>

        <div>
          {this.props.classrooms &&
            this.props.classrooms.map(classroom => (
              <Classrooms
                todo={classroom}
                removeClassroom={this.removeClassroom}
                toggleTodo={this.toggleClassroom}
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
  { addClassroom, removeClassroom, toggleClassroom }
)(ClassesPage);

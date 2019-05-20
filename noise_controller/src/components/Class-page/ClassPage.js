import React from 'react';

import { connect } from "react-redux";

class ClassesPage extends React.Component {
    state = {
        teachers:[],
        inputField: ""
    }

    handleChanges = e => {
        this.setState({
            inputField: e.target.value
        })
    }

    render() {
        return (
            <div>
                
                <div>

                </div>

                <input 
                onChange={this.handleChanges}
                placeholder="Add another class..."
                />

                <button> Add </button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        teachers: state.teachers
    }
}

export default connect(
    mapStateToProps
)(ClassesPage);
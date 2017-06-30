import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';

class AddTasks extends Component {
    addTask() {
        console.log(this.props);
        this.props.add('Task');
    }
    render() {
        return(
            <div>
                <h2>Render from Add Task</h2>
                <button type="button" onClick={() => this.addTask()}>Add</button>
            </div>
        );
    }
}

export default connect(null, {add})(AddTasks);
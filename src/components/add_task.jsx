import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTask from '../actions/add_task_action';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    addTaskToList() {
        this.props.addTask(this.state.task);
    }

    render() {
        return(
            <div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            type="text"
                            className="from-control"
                            placeholder="Input your task"
                            onChange={event => this.setState({task: event.target.value})}
                        />
                    </div>
                    <div>Task: {this.state.task}</div>
                    <button
                        className="btn btn-success"
                        onClick={() => this.addTaskToList()}
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        );
    };
}

export default connect(null, {addTask})(AddTask);
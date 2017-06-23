import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addTask from '../actions/add_task_action';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    addTaskToList() {
        console.log('Need to add action to add this task (props): ', this.props);
        console.log('Need to add action to add this task: (state)', this.state);
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

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps: ', dispatch);
    return bindActionCreators({addTask: addTask}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTask);
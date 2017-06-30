import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';

class AddTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    addTask() {
        this.props.add(this.state.task);
    }

    render() {
        return(
            <div>
                <h2>Add Task to Your List</h2>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            onChange={event => this.setState({task: event.target.value})}
                        />
                        <button type="button" onClick={() => this.addTask()} className="form-control">Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {add})(AddTasks);
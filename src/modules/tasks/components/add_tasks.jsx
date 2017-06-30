import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../assets/stylesheets/add_task.css';

class AddTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    addTask() {
        this.props.add(this.state.task);
        this.setState({task: ''});
    }

    render() {
        return(
            <div className="add-task">
                <h2>Add Task to Your List</h2>
                <div className="form-inline">
                    <div className="form-group">
                        <TextField
                            hintText="Task..."
                            floatingLabelText="Add your task description"
                            floatingLabelFixed={false}
                            onChange={event => this.setState({task: event.target.value})}
                            value={this.state.task}
                        />
                        <RaisedButton
                            label="Primary"
                            primary={true}
                            onTouchTap={() => this.addTask()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {add})(AddTasks);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import '../assets/stylesheets/add_task.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            dead_line: 'Not Set Yet',
            formOpen: false
        }
    }

    handleOpen = () => {
        this.setState({formOpen: true});
    };

    handleClose = () => {
        this.setState({formOpen: false});
    };

    addTask() {
        this.props.add(
            {
                title: this.state.title,
                description: this.state.description,
                dead_line: this.state.dead_line
            }
        );

        this.setState({title: ''});
        this.setState({description: ''});
    }

    renderAddTaskForm() {
        return(
            <div className="add-task-form">
                <div>
                    <TextField
                        hintText="Title"
                        floatingLabelText="Add your task Title"
                        floatingLabelFixed={false}
                        onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                </div>

                <div>
                    <TextField
                        hintText="Description"
                        floatingLabelText="Add your task Description"
                        multiLine={true}
                        floatingLabelFixed={false}
                        rows={2}
                        onChange={event => this.setState({description: event.target.value})}
                        value={this.state.description}
                    />
                </div>

                <div>
                    <DatePicker
                        hintText="Landscape Dialog"
                        mode="landscape"
                        onChange={(event, x) => this.setState({dead_line: new Date(x)})}
                    />
                </div>
            </div>
        );
    }

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Add"
                primary={true}
                keyboardFocused={true}
                onTouchTap={ () => {
                    this.handleClose();
                    this.addTask();
                    }
                }
            />,
        ];

        return(
            <div>
                <FloatingActionButton
                    className="add-button"
                >
                    <ContentAdd
                        onTouchTap={() => this.handleOpen()}
                    />
                </FloatingActionButton>
                <Dialog
                    title="Add New Task"
                    actions={actions}
                    modal={false}
                    open={this.state.formOpen}
                    onRequestClose={this.handleClose}
                    titleStyle={{textAlign: "center"}}
                >
                    {this.renderAddTaskForm()}
                </Dialog>
            </div>
        );
    }
}

export default connect(null, {add})(AddTasks);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Panel } from 'react-bootstrap';
import deleteTask from '../actions/delete_task_action';

class CompleteTaskList extends Component {

    allCompleteTask(tasks) {
        return tasks.filter(task => task.status === 'complete');
    }

    renderTasks() {
        const {tasks} = this.props.tasks;
        const activeTasks = this.allCompleteTask(tasks);
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Task Status</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    activeTasks.map(task => {
                        return(
                            <tr key={task.id} className="text-justify">
                                <td>{task.task}</td>
                                <td> Not implemented yet </td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                    >Incompolete</button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
        );
    }
    render() {
        return(
            <Panel header='All Task List todo' bsStyle="primary">
                {this.renderTasks()}
            </Panel>
        );
    };
}


function mapStateToProps(state) {
    console.log('state form complete task list: ', state);
    return {tasks: state};
}

export default connect(mapStateToProps)(CompleteTaskList);
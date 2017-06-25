import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Panel } from 'react-bootstrap';
import deleteTask from '../actions/delete_task_action';
import completeTask from '../actions/complete_task_action';

class AllTaskList extends Component {

    allActiveTaskList(tasks) {
        return tasks.filter(task => task.status === 'active');
    }

    markTaskComplete(id) {
        console.log('came here for mark complete: ' + id, this.props);
        this.props.completeTask(id);
    }

    removeTask(id) {
        this.props.deleteTask(id);
    }

    renderTasks() {
        const {tasks} = this.props.tasks;
        const activeTasks = this.allActiveTaskList(tasks);
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
                                            onClick={() => this.markTaskComplete(task.id)}
                                        >Done</button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => this.removeTask(task.id)}
                                        >Remove Task</button>
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
    console.log('mapStateToProps: ', state);
    return {tasks: state}
}

export default connect(mapStateToProps, { deleteTask, completeTask })(AllTaskList);
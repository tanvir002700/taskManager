import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Panel } from 'react-bootstrap';
import deleteTask from '../actions/delete_task_action';

class AllTaskList extends Component {

    removeTask(id) {
        console.log('Need to add action to add this task (props): ', this.props);
        console.log('Need to add action to add this task: (state)', this.state);
        console.log("id for delete: " + id);
        this.props.deleteTask(id);
    }

    renderTasks() {
        const {tasks} = this.props.tasks;
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Task Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => {
                            return(
                                <tr key={task.id} className="text-justify">
                                    <td>{task.task}</td>
                                    <td> Not implemented yet </td>
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

export default connect(mapStateToProps, { deleteTask })(AllTaskList);
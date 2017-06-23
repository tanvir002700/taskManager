import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class AllTaskList extends Component {
    renderTasks() {
        const {tasks} = this.props.tasks;
        console.log('task to show', tasks);
        return (
            <Table responsive>
                <caption>Basic Table Layout</caption>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Task Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => {
                            return(
                                <tr>
                                    <td key={task.id}>{task.task}</td>
                                    <td key={task.id+1}> Not implemented yet </td>
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
            <div>{this.renderTasks()}</div>
        );
    };
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ', state);
    return {tasks: state}
}

export default connect(mapStateToProps, null)(AllTaskList);
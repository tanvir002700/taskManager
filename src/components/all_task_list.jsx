import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Panel } from 'react-bootstrap';

class AllTaskList extends Component {
    renderTasks() {
        const {tasks} = this.props.tasks;
        console.log('task to show', tasks);
        return (
            <Table responsive>
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
                                <tr key={task.id} className="text-justify">
                                    <td>{task.task}</td>
                                    <td> Not implemented yet </td>
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

export default connect(mapStateToProps, null)(AllTaskList);
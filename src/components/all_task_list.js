import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllTaskList extends Component {
    renderTasks() {
        const {tasks} = this.props.tasks;
        console.log('task to show', tasks);
        return (
            <ul>
                {
                    tasks.map(task => {
                        return(
                            <li key={task.id}>{task.task}</li>
                        );
                    })
                }
            </ul>
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
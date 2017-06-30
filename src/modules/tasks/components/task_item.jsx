import React, {Component} from 'react';
import {connect} from 'react-redux';
import {complete, destroy} from '../actions';
import { createStructuredSelector } from 'reselect';

import { getAll } from '../selectors';

class TaskItem extends Component {
    markComplete(id) {
        console.log('Task id: ', id);
        this.props.complete(id);
    }

    destroy(id) {
        this.props.destroy(id);
    }

    render() {
        const {task} = this.props;
        console.log('Task from task item props: ', this.props);
        console.log('Task from task item: ', task);
        let deleteButton = null;
        if(this.props.deleteButton) {
            deleteButton = (<div className="form-group">
                <button type="button"
                        onClick={() => this.destroy(task.id)}
                >Delete</button>
            </div>);
        }

        let completeButton = null;
        if(this.props.completeButton) {
            completeButton = (
                <div className="form-group">
                    <button type="button"
                            onClick={() => this.markComplete(task.id)}
                    >Complete</button>
                </div>
            );
        }
        return(
            <li key={task.id}>
                {task.task} {task.completed}
                {completeButton}
                {deleteButton}
            </li>
        );
    }
}

function mapStateToProps(state) {
    return createStructuredSelector({
        tasks: getAll
    });
}

export default connect(mapStateToProps, {complete, destroy})(TaskItem);
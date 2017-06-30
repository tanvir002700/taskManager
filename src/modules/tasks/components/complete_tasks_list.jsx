import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCompleted } from '../selectors';
import {complete, destroy} from '../actions';
import TaskItem from './task_item';

class CompleteTasksList extends Component {
    markComplete(id) {
        this.props.complete(id);
    }

    destroy(id) {
        this.props.destroy(id);
    }

    render() {
        const {complete_tasks} = this.props;
        console.log('Only active Task: ', this.props);
        return(
            <div>
                <h2>Render from All Complete Task List</h2>
                {
                    complete_tasks.map((task,key) => {
                        return (
                            <TaskItem task={task} key={key} deleteButton={true}/>
                        );
                    })
                }
            </div>
        );
    }
}

function mapStateToProps() {
    return createStructuredSelector({
        complete_tasks: getCompleted
    });
}
export default connect(mapStateToProps, {complete, destroy})(CompleteTasksList);
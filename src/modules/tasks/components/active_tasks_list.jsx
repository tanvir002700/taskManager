import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getActive } from '../selectors';
import {complete, destroy} from '../actions';
import TaskItem from './task_item';

class ActiveTasksList extends Component {
    markComplete(id) {
        this.props.complete(id);
    }

    destroy(id) {
        this.props.destroy(id);
    }

    render() {
        const {active_tasks} = this.props;
        console.log('Only active Task: ', this.props);
        return(
            <div>
                <h2>Render from All Active Task List</h2>
                <ol>
                    {
                        active_tasks.map((task,key) => {
                            return (
                                <TaskItem task={task} key={key} deleteButton={true} completeButton={true}/>
                            );
                        })
                    }
                </ol>
            </div>
        );
    }
}

function mapStateToProps() {
    return createStructuredSelector({
        active_tasks: getActive
    });
}
export default connect(mapStateToProps, {complete, destroy})(ActiveTasksList);
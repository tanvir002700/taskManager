import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import {complete, destroy} from '../actions';
import TaskItem from './task_item';
import TaskStatistics from './task_statistics';

class AllTasksList extends Component {

    render() {
        const {tasks} = this.props;
        return(
            <div>
                <TaskStatistics/>
                <h2>All Task List</h2>
                {
                    tasks.map((task,key) => {
                        return (
                            <TaskItem task={task} key={key} deleteButton={true} completeButton={true}/>
                        );
                    })
                }
            </div>
        );
    }
}

function mapStateToProps() {
    return createStructuredSelector({
        tasks: getAll
    });
}
export default connect(mapStateToProps, {complete, destroy})(AllTasksList);
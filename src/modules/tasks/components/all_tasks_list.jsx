import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import {complete, destroy} from '../actions';
import TaskItem from './task_item';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class AllTasksList extends Component {

    render() {
        const {tasks} = this.props;
        console.log("task list render from: ", this.props);
        return(
            <div>
                <h2>Render from All Task List</h2>
                <h1>count {tasks.length}</h1>
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
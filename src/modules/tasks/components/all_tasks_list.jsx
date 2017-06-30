import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll, getActive, getCompleted } from '../selectors';

class AllTasksList extends Component {
    render() {
        const {tasks} = this.props;
        return(
            <div>
                <h2>Render from All Task List</h2>
                <ol>
                    {
                        tasks.map((task,key) => {
                            return <li key={key}>{task.task}</li>
                        })
                    }
                </ol>
            </div>
        );
    }
}

function mapStateToProps() {
    return createStructuredSelector({
        tasks: getAll,
        active: getActive,
        complete: getCompleted
    });
}
export default connect(mapStateToProps, null)(AllTasksList);
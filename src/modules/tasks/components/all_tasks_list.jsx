import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import {complete, destroy} from '../actions';

class AllTasksList extends Component {
    markComplete(id) {
        this.props.complete(id);
    }

    destroy(id) {
        this.props.destroy(id);
    }

    render() {
        const {tasks} = this.props;
        console.log("task list from: ", this.props);
        return(
            <div>
                <h2>Render from All Task List</h2>
                <ol>
                    {
                        tasks.map((task,key) => {
                            return (<li key={task.id}>
                                {task.task} {task.completed}
                                <div className="form-group">
                                    <button type="button"
                                        onClick={() => this.markComplete(task.id)}
                                    >Complete</button>
                                </div>
                                <div className="form-group">
                                    <button type="button"
                                            onClick={() => this.destroy(task.id)}
                                    >Delete</button>
                                </div>
                                </li>
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
        tasks: getAll
    });
}
export default connect(mapStateToProps, {complete, destroy})(AllTasksList);
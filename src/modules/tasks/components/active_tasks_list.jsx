import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll, getActive } from '../selectors';
import {complete, destroy} from '../actions';

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
                            return (<li key={task.id}>
                                    {task.task} {task.complete}
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
        active_tasks: getActive,
        tasks: getAll
    });
}
export default connect(mapStateToProps, {complete, destroy})(ActiveTasksList);
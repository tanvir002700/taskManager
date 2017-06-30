import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import {complete} from '../actions';

class AllTasksList extends Component {
    markComplete(id) {
        this.props.complete(id);
    }

    render() {
        const {tasks} = this.props;
        return(
            <div>
                <h2>Render from All Task List</h2>
                <ol>
                    {
                        tasks.map((task,key) => {
                            return (<li key={task.id}>
                                {task.task} {task.complete}
                                <div className="form-group">
                                    <button type="button"
                                        onClick={() => this.markComplete(task.id)}
                                    >Complete</button>
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
export default connect(mapStateToProps, {complete})(AllTasksList);
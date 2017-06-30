import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll, getActive, getCompleted } from '../selectors';

class AllTasksList extends Component {
    render() {
        console.log(this.props);
        // console.log(tasks);
        return(
            <div>Render from All Task List</div>
        );
    }
}

function mapStateToProps() {
    return createStructuredSelector({
        tasks: getAll,
        active: getActive,
        complete: getCompleted
    })
}
export default connect(
    mapStateToProps, null)(AllTasksList);
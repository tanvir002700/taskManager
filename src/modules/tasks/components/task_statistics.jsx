import React, {Component} from 'react';
import Badge from 'material-ui/Badge';
import { getCounts } from '../selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import '../assets/stylesheets/task_statistics.css'

class TaskStatistics extends Component {

    render() {
        return (
            <div className="task-statistics">
                <Badge
                    badgeContent={this.props.task_count.active}
                    primary={true}
                >
                    Active
                </Badge>
                <Badge
                    badgeContent={this.props.task_count.completed}
                    secondary={true}
                >Complete
                </Badge>
            </div>
        );
    }
}

function mapStateToProps() {
    return createStructuredSelector({
        task_count: getCounts
    });
}

export default connect(mapStateToProps,null)(TaskStatistics);
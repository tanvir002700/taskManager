import React, {Component} from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import '../assets/stylesheets/task_statistics.css'

class TaskStatistics extends Component {
    state = {
        selectedIndex: 0,
    };


    select = (index) => this.setState({selectedIndex: index});

    render() {
        const style = {
            width: 100,
            float: 'right'
        }
        return (
            <div className="task-statistics">
                <Badge
                    badgeContent={4}
                    primary={true}
                >
                    Active
                </Badge>
                <Badge
                    badgeContent={10}
                    secondary={true}
                >Complete
                </Badge>
            </div>
        );
    }
}

export default TaskStatistics;
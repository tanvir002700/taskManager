import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import '../assets/stylesheets/task_canvas.css';
import AddTasks from './add_tasks';
import AllTasksList from './all_tasks_list';
import ActiveTasksList from './active_tasks_list';
import CompleteTasksList from './complete_tasks_list';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

class TaskCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return(
            <div className="task-canvas">
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="All Tasks" value={0} />
                    <Tab label="Active Tasks" value={1} />
                    <Tab label="Complete Tasks" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <AddTasks/>
                        <AllTasksList/>
                    </div>
                    <div style={styles.slide}>
                        <ActiveTasksList/>
                    </div>
                    <div style={styles.slide}>
                        <CompleteTasksList/>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

export default TaskCanvas;
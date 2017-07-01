import React, {Component} from 'react';
import {connect} from 'react-redux';
import {complete, destroy} from '../actions';
import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class TaskItem extends Component {
    markComplete(id) {
        this.props.complete(id);
    }

    destroy(id) {
        this.props.destroy(id);
    }

    render() {
        const {task} = this.props;
        let deleteButton = null;
        if(this.props.deleteButton) {
            deleteButton = (
                <RaisedButton
                    label="Delete"
                    secondary={true}
                    onTouchTap={() => this.destroy(task.id)}
                />
            );
        }

        let completeButton = null;
        if(task.completed === 'false') {
            completeButton = (
                <RaisedButton
                    label="Complete"
                    primary={true}
                    onTouchTap={() => this.markComplete(task.id)}
                />
            );
        }

        return(
            <Card>
                <CardHeader
                    title={task.title}
                    subtitle={`Dead Line: ${String(task.dead_line)}`}
                    actAsExpander={true}
                    showExpandableButton={true}
                    subtitleColor="green"
                    titleColor="blue"
                />
                <CardActions>
                    {deleteButton}
                    {completeButton}
                </CardActions>
                <CardText expandable={true}>
                    {task.description}
                </CardText>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return createStructuredSelector({
        tasks: getAll
    });
}

export default connect(mapStateToProps, {complete, destroy})(TaskItem);
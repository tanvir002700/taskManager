import React, {Component} from 'react';
import tasks from '../modules/tasks';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const {AddTasks, AllTasksList, ActiveTasksList, CompleteTasksList} = tasks.components;

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

class App extends Component {
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
            <MuiThemeProvider>
                <div>

                    <Header/>

                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}
                    >
                        <Tab label="Tab One" value={0} />
                        <Tab label="Tab Two" value={1} />
                        <Tab label="Tab Three" value={2} />
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
            </MuiThemeProvider>
        );
    }
}

export default App;
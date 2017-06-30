import React, {Component} from 'react';
import tasks from '../modules/tasks';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './layout';

const {AddTasks, AllTasksList, ActiveTasksList, CompleteTasksList} = tasks.components;

class App extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <Layout/>
                    <AddTasks/>
                    <AllTasksList/>
                    <ActiveTasksList/>
                    <CompleteTasksList/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
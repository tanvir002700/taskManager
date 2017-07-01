import React, {Component} from 'react';
import tasks from '../modules/tasks';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import '../assets/stylesheets/app.css';

const {TaskCanvas} = tasks.components;

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
                    <TaskCanvas/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
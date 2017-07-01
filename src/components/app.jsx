import React, {Component} from 'react';
import tasks from '../modules/tasks';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import '../assets/stylesheets/app.css';

const {TaskCanvas} = tasks.components;

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
                    <TaskCanvas/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
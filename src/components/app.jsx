import React, { Component } from 'react';
import logo from '../logo.svg';
import './app.css';
import AddTask from './add_task';
import AllTaskList from './all_task_list';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <Grid>
                <Row>
                    <Col xs={4} md={4}>
                        <AddTask/>
                    </Col>
                    <Col xs={8} md={8}>
                        <AllTaskList/>
                    </Col>
                </Row>
            </Grid>
            <div className="add-task">

            </div>
            <div className="all-task-list">

            </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../logo.svg';
import './app.css';
import AddTask from './add_task';
import AllTaskList from './all_task_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="add-task">
            <AddTask/>
        </div>
        <div className="all-task-list">
            <AllTaskList/>
        </div>
      </div>
    );
  }
}

export default App;

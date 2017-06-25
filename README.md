# Task Manager

Simple task manager app. Develop with react/redux.

## Getting Started

This is a simple task management react project.
Use redux in this project for save state easily and Use sfcookie for save task in brower cookie.

### Prerequisites

Need latest version of npm.

### Installing

For development setup run:
    ```
        $ npm install
    ```

For transform bundle js run:
    ```
        $ npm run create
    ```

### Project source structure
 following structure maintain for redux integration:
 ```
    src
    ├── actions
    │   ├── active_task_acton.js
    │   ├── add_task_action.js
    │   ├── complete_task_action.js
    │   └── delete_task_action.js
    ├── components
    │   ├── add_task.jsx
    │   ├── all_task_list.jsx
    │   ├── app.css
    │   ├── app.jsx
    │   └── complete_task_list.jsx
    ├── constants.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── reducers
        ├── index.js
        └── task_reducer.js

 ```
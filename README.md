# Task Manager
<a href="https://codeclimate.com/github/codeclimate/codeclimate"><img src="https://codeclimate.com/github/tanvir002700/taskManager/badges/gpa.svg" /></a>

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
    ├── assets
    │   ├── images
    │   │   └── logo.svg
    │   └── stylesheets
    │       ├── app.css
    │       └── index.css
    ├── index.js
    ├── modules
    │   └── tasks
    │       ├── action_types.js
    │       ├── actions.js
    │       ├── assets
    │       │   └── stylesheets
    │       ├── components
    │       │   ├── add_tasks.jsx
    │       │   ├── all_tasks_list.jsx
    │       │   └── index.js
    │       ├── constants.js
    │       ├── index.js
    │       ├── model.js
    │       ├── reducer.js
    │       └── selectors.js
    └── root_reducer.js
 ```
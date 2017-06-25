export const createTask = (action) => {
    return {
        task: action.payload,
        status: 'active',
        id: Math.random()
    };
};

export const removeTask = (state, action) => {
    const tasks = state.filter( task => task.id !== action.payload);
    return tasks;
};

export const completeTask = (state, action) => {
    const tasks = state.map(task => {
        if(task.id === action.payload) {
            task.status = 'complete';
        }
        return task;
    });
    return tasks;
};

export const activeTask = (state, action) => {
    const tasks = state.map(task => {
        if(task.id === action.payload) {
            task.status = 'active';
        }
        return task;
    });
    return tasks;
};
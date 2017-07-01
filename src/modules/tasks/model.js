const taskObject = task => {
    return {
        id: Math.random(),
        title: task.title,
        description: task.description,
        dead_line: task.dead_line,
        completed: 'false'
    };
};

export const create = (state, task) => {
    return [...state, taskObject(task)];
}

export const makeComplete = (state , id) => {
    return state.map(task => {
        if(task.id === id) {
            task.completed = 'true';
        }
        return task;
    });
}

export const destroy = (state, id) => {
    return state.filter(task => {
        return task.id !== id;
    });
};

export const initial_state = [];

export const filterCompleted = tasks => tasks.filter(t => t.completed === 'true');

export const filterActive = tasks => tasks.filter(t => t.completed === 'false');
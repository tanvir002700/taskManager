const taskObject = task => {
    return {
        id: Math.random(),
        task: task,
        complete: 'false'
    };
};

export const create = (state, task) => {
    return [...state, taskObject(task)];
}

export const makeComplete = (state , id) => {
    return state.map(task => {
        if(task.id === id) {
            task.complete = 'true';
        }
        return task;
    });
}

export const destroy = (state, id) => {
    return state.filter(task => {
        return task.id !== id;
    });
};

export const State = [];

export const filterCompleted = tasks => tasks.filter(t => t.completed);

export const filterActive = tasks => tasks.filter(t => !t.completed);
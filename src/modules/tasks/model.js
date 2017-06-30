const create = task => {
    return {
        id: Math.random(),
        task: task,
        complete: 'false'
    };
};

export const createTask = (state, task) => {
    return [...state, create(task)];
}

export const makeComplete = (state , id) => {
    return state.map(task => {
        if(task.id == id) {
            task.complete = 'true';
        }
        return task;
    });
}

export const State = [];

export const filterCompleted = tasks => tasks.filter(t => t.completed);

export const filterActive = tasks => tasks.filter(t => !t.completed);
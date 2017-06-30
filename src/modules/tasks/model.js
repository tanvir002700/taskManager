export const create = task => {
    return {
        id: Math.random(),
        task: task,
        complete: 'false'
    };
}

export const makeComplete = (task) => {
    let object = task;
    task.complete = 'true';
    return task;
}

export const State = [];

export const filterCompleted = tasks => tasks.filter(t => t.completed);

export const filterActive = tasks => tasks.filter(t => !t.completed);
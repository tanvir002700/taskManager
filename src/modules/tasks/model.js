export default Task = {
    id: 0,
    text: 'string',
    completed: 'boolean'
};

export const filterCompleted = tasks => tasks.filter(t => t.completed);

export const filterActive = tasks => tasks.filter(t => !t.completed);
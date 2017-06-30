class Task {
    constructor(task) {
        this.id = 0;
        this.task = task;
        this.complete = false;
    }
}

export default Task;

export const State = [];

export const filterCompleted = tasks => tasks.filter(t => t.completed);

export const filterActive = tasks => tasks.filter(t => !t.completed);
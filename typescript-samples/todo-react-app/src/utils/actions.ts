import { Task } from "../type/type";

export const addStorage = (tasks: Task): void => {
    const tasksJSON = localStorage.getItem("TASKS");
    let stored = JSON.parse(tasksJSON);
    stored = [...stored, tasks];
    localStorage.setItem('TASKS', JSON.stringify(stored));
}

export const saveTask = (task: Task): void => {
    const tasksJSON = localStorage.getItem("TASKS");
    if (task.length > 0 && JSON.parse(tasksJSON)?.length > 0) {
        addStorage(task);

    } else {
        localStorage.setItem("TASKS", JSON.stringify(task));
    }
}

export const loadTasks = () => {
    const tasksJSON = localStorage.getItem("TASKS");
    if (tasksJSON === null) return [];
    return JSON.parse(tasksJSON);
}

import { Task } from "../@types/todo";

export const saveTask = (tasks: Task): void => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
}

export const loadTasks = () => {
    const tasksJSON = localStorage.getItem("TASKS");
    if (tasksJSON === null) return [];
    return JSON.parse(tasksJSON);
}

import { useContext, useEffect, useState } from "react";
import { Context } from '../state/context';
import { Task } from "../type/type";
import { loadTasks } from "../utils/actions";

const List = () => {
    const value = useContext(Context);
    const { state, dispatch } = value;
    const tasks = state?.tasks;
    const [completedTasks, setCompletedTask] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const taskCheck = (id: string) => {
        const updatedTasks = tasks.map((task: Task) => task.id === id ? { ...task, completed: !task.completed } : task);
        dispatch({ type: 'updateTasks', payload: { values: updatedTasks } });
        //return updatedTasks;
    }

    const toggleCompletedHandle = () => {
        setCompletedTask(!completedTasks);
    }

    const toggleStrictListHandle = () => {
    }

    useEffect(() => {
        setTaskList(loadTasks());
        console.log(taskList);
    }, [])

    useEffect(() => {
        const updatedTasks = tasks.filter((task: Task) => task.completed === completedTasks);
        setTaskList(updatedTasks);
    }, [completedTasks])

    return <div className="todo-list-container">
        <h3>TODO list</h3>
        <label>Strict list <input type="checkbox" onClick={toggleStrictListHandle} /></label>
        {tasks.length > 0 && <label>Show {completedTasks ? 'completed' : 'not completed'} <input type="checkbox" onClick={toggleCompletedHandle} /></label>}
        {tasks.length > 0 && <ul id="todo-list" className="todo-list">
            {tasks.map((task: Task, index: number) => {
                return (<li key={index} className={task.completed ? 'completed' : 'not-completed'}><input type="checkbox" checked={task.completed} onClick={() => taskCheck(task.id)} />{task.title}</li>)

            })}
        </ul>}
    </div>

}

export default List;


import { useContext } from "react";
import { TodoContext } from '../state/context';
import { ITodo } from "../@types/todo";
import { saveTask } from "../utils/actions";

const List = () => {
    const value = useContext(TodoContext);
    const { state, dispatch } = value;
    const tasks = state?.tasks;

    const completedTasks = tasks.filter(item => item.completed).length;

    const taskCheck = (id: string) => {
        const updatedTasks = tasks.map((task: ITodo) => task.id === id ? { ...task, completed: !task.completed } : task);
        dispatch({ type: 'updateTasks', payload: { values: updatedTasks } });
    }

    const handleDeleteTasks = () => {
        const unCompletedTasks = tasks.filter(item => !item.completed);
        dispatch({ type: 'updateTasks', payload: { values: unCompletedTasks } });
        saveTask(unCompletedTasks);
    }

    const CompletedMessage = () => {
        if (completedTasks > 0) {
            return <><p>You have {`${tasks.length} / ${completedTasks} completed tasks`}</p><button onClick={handleDeleteTasks}>Delete all completed tasks</button></>;
        } else {
            return <>You have no completed task</>
        }
    }

    return <div className="todo-list-container">
        <CompletedMessage />
        {tasks.length > 0 && <ul id="todo-list" className="todo-list">
            {tasks.map((task: ITodo, index: number) => {
                return (
                    <li key={index} className={task.completed ? 'completed' : 'not-completed'}>
                        <input type="checkbox" checked={task.completed} onClick={() => taskCheck(task.id)} />{task.title}
                    </li>)
            })}
        </ul>}
    </div>

}

export default List;


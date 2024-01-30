import { useContext, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Context } from '../state/context';
import { saveTask } from "../utils/actions";
import { Task } from "../type/type";

const Form: React.FC = () => {
    const value = useContext(Context);
    const { state, dispatch } = value;
    const tasks = state?.tasks;

    const [inputValue, setInputValue] = useState('');

    const handleOnSubmit = (ev: React.FormEvent<HTMLFormElement> | undefined): void => {
        ev?.preventDefault();
        if (inputValue == '' || inputValue == null) { return; }
        const newTask: Task = {
            id: uuidV4(),
            title: inputValue,
            completed: false,
            createdAt: new Date(),
        };
        dispatch({ type: 'setTasks', payload: { values: newTask } });
        setInputValue('');
    }

    useEffect(() => {
        if (tasks.length > 0) {
            saveTask(tasks);
        }
    }, [tasks]);


    return <form id="todo-form" onSubmit={handleOnSubmit}>
        <input type="text" value={inputValue} id="todo-title" onChange={e => setInputValue(e.target.value)} />
        <button>Add</button>
    </form>

}

export default Form;

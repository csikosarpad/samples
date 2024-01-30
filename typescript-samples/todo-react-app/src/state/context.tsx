import { createContext, useReducer } from 'react';
import { loadTasks } from "../utils/actions";
import { TodoContextType, ITodo } from '../@types/todo';

//export const Context = createContext();
export const TodoContext = createContext<TodoContextType | null>(null);

const initialState = {
    tasks: loadTasks(),
};

function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'setTasks':
            return {
                ...state,
                tasks: [...state.tasks, action.payload.values],
            };
        case 'updateTasks':
            return {
                ...state,
                tasks: action.payload.values,
            };
        default:
            return state;
    }
}

//const Provider: React.FC = ({ children }) => {
const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}> {children} </TodoContext.Provider>
    );
};

export default TodoProvider;

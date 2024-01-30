import { createContext, useReducer } from 'react';
import { loadTasks } from "../utils/actions";


export const Context = createContext();

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

const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}> {children} </Context.Provider>
    );
};

export default Provider;

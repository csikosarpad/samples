import { createContext, useReducer } from 'react';

export const Context = createContext();

const initialState = {
  count: 0,
  failureCount: 0,
  result: 0,
  values: { random1: 0, random2: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setValues':
      return {
        ...state,
        values: action.payload.values,
      };
    case 'setGuess':
      return {
        ...state,
        guess: action.payload.guess,
      };
    case 'setResult':
      return {
        ...state,
        result: action.payload.result,
        values: { random1: 0, random2: 0 },
        count:
          action.payload.result === parseInt(state.guess)
            ? state.count + 1
            : state.count,
        failureCount:
          action.payload.result !== parseInt(state.guess)
            ? state.failureCount + 1
            : state.failureCount,
      };
    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;

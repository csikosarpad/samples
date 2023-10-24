import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const cities = [
  { name: 'Budapest', id: 'city_1' },
  { name: 'Győr', id: 'city_2' },
  { name: 'Debrecen', id: 'city_3' },
  { name: 'Pécs', id: 'city_4' },
  { name: 'Szeged', id: 'city_5' },
  { name: 'Vác', id: 'city_6' },
  { name: 'Balaton', id: 'city_7' },
  { name: 'Fertő-tó', id: 'city_8' },
];

const initialState = {
  cities: cities,
  currentCity: { name: 'Budapest' },
  actPage: 'city',
};

function reducer(state, action) {
  switch (action.type) {
    case 'setCurrentCity':
      return {
        ...state,
        currentCity: action.payload.currentCity,
      };
    case 'setPage':
      return {
        ...state,
        actPage: action.payload.actPage,
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

import { createStore, combineReducers } from 'redux';
import { actionReducer } from './reducers';

const cities = [
  { name: 'Budapest', id: 'city_1' },
  { name: 'Győr', id: 'city_2' },
  { name: 'Debrecen', id: 'city_3' },
  { name: 'Pécs', id: 'city_4' },
  { name: 'Szeged', id: 'city_5' },
  { name: 'Vác', id: 'city_6' },
  { name: 'Balaton', id: 'city_7' },
  { name: 'Hajdúszoboszló', id: 'city_8' },
];

const reducers = { actionReducer, cities };

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

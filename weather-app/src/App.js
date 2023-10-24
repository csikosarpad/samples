import React, { useContext, useEffect, useState } from 'react';
import { Context } from './utils/context';
import Search from './components/Search';
import City from './components/City';
import Weather from './components/Weather';
import './weather.css';
//import { API_KEY } from './utils/constans';

export default function App() {
  const value = useContext(Context);
  const { state, dispatch } = value;
  const [currentCity, setCurrentCity] = useState(state.currentCity);

  /*useEffect(() => {
    setCurrentCity(state.currentCity);
  }, [state.currentCity]);*/

  const setPage = (e) => {
    dispatch({
      type: 'setPage',
      payload: { actPage: e.target.id },
    });
  };

  const { actPage } = state;

  useEffect(() => {
    setCurrentCity(state.currentCity);
  }, [state.currentCity]);

  return (
    <div className="app-container">
      <button onClick={setPage} id="city">
        City
      </button>
      <button onClick={setPage} id="search">
        Search
      </button>
      <button onClick={setPage} id="weather">
        Weather
      </button>
      {actPage === 'search' && <Search />}
      {actPage === 'city' && <City />}
      {actPage === 'weather' && <Weather />}
    </div>
  );
}
/*
function City({ rState }) {
  const value = useContext(Context);
  const { state } = value;
  const [currentCity, setCurrentCity] = useState(state.currentCity.name);

  useEffect(() => {
    setCurrentCity(state.currentCity.name);
  }, [state]);

  return (
    <div>
      <h2>Selected City</h2>
      <p>currentCity</p>
    </div>
  );
}

function Search({ rState }) {
  //temporary
  const value = useContext(Context);
  const { state, dispatch } = value;
  const cities = state.cities;
  const [currentCity, setCurrentCity] = useState(state.currentCity.name);

  useEffect(() => {
    setCurrentCity(state.currentCity.name);
  }, [state, currentCity]);

  return (
    <div>
      <h2>Search city - {currentCity}</h2>
      <select
        onChange={(e) =>
          dispatch({
            type: 'setCurrentCity',
            payload: { currentCity: e.target.value },
          })
        }
      >
        {cities.map((element) => (
          <option key={element.index} value={element.name}>
            {element.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function Weather({ rState }) {
  const value = useContext(Context);
  const { state } = value;
  const [currentCity, setCurrentCity] = useState(state.currentCity.name);

  useEffect(() => {
    setCurrentCity(state.currentCity.name);
  }, [state]); 

  return (
    <div>
      <h2>Weather - currentCity</h2>
      {rState}
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}*/

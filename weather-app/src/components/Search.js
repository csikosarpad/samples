import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../utils/context';

const Search = () => {
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
      <input
        list='cities'
        name='cities'
        onChange={(e) =>
          dispatch({
            type: 'setCurrentCity',
            payload: { currentCity: { name: e.target.value } },
          })
        }
      />
      <datalist id='cities'>
        {cities.map((element) => (
          <option key={element.index} value={element.name}>
            {element.name}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default Search;

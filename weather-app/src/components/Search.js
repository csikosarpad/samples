import React, { useContext } from 'react';
import { Context } from '../utils/context';

const Search = () => {
  const value = useContext(Context);
  const { state, dispatch } = value;
  const cities = state.cities;

  const setPage = () => {
    dispatch({
      type: 'setPage',
      payload: { actPage: 'weather' },
    });
  };
  const onChange = (e) => {
    dispatch({
      type: 'setCurrentCity',
      payload: { currentCity: { name: e.target.value } },
    });
    setPage();
  };

  return (
    <>
      <button onClick={setPage} className='btn btn-back' />
      <input list='cities' name='cities' onChange={onChange} />
      <datalist id='cities'>
        {cities.map((element) => (
          <option key={element.index} value={element.name}>
            {element.name}
          </option>
        ))}
      </datalist>
    </>
  );
};

export default Search;

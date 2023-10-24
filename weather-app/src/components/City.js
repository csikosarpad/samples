import React, { useContext } from 'react';
import { Context } from '../utils/context';

const City = () => {
  const value = useContext(Context);
  const { state, dispatch } = value;

  const setPage = (e) => {
    dispatch({
      type: 'setPage',
      payload: { actPage: 'search' },
    });
  };

  return (
    <div>
      <h2>{state.currentCity.name}</h2>
      <button onClick={setPage}>+</button>
    </div>
  );
};

export default City;

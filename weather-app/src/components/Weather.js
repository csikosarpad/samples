import React, { useContext } from 'react';
import { Context } from '../utils/context';

const Weather = () => {
  const value = useContext(Context);
  const { state } = value;

  return (
    <div>
      <h2>Weather - {state.currentCity.name}</h2>
    </div>
  );
};
export default Weather;

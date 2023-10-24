import React, { useContext } from 'react';
import { Context } from './utils/context';
import Search from './components/Search';
import City from './components/City';
import Weather from './components/Weather';
import './styles/pe-icon-7-weather.css';
import './styles/helper.css';
import './styles/weather-app.css';

export default function App() {
  const value = useContext(Context);
  const { state } = value;

  const { actPage } = state;

  return (
    <div className='app-container'>
      {actPage === 'search' && <Search />}
      {actPage === 'city' && <City />}
      {actPage === 'weather' && <Weather />}
    </div>
  );
}

import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Context } from '../utils/context';
import { API_KEY } from '../utils/constans';

const getWeather = (url, success, fail) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', url);
  httpRequest.onload = function () {
    if (httpRequest.status === 200) {
      success(httpRequest.responseText);
    } else {
      fail(httpRequest.response);
    }
  };
  httpRequest.send();
};

const getTime = (time) => {
  const date = new Date(time);
  return { hours: date.getHours(), minutes: date.getMinutes() };
};

const failedContent = (response) => {
  return <p>{response.message}</p>;
};

const successContent = (dataObj) => {
  const { main, sys, weather, dt } = dataObj;
  const iconSrc = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  return (
    <ul className='weather-list'>
      <li className='time'>{getTime(dt).hours}</li>
      <li className='time'>{getTime(dt).minutes}</li>
      <li className='city'>{dataObj.name}</li>
      <li>
        <img src={iconSrc} alt={weather[0].description} />
      </li>
      <li>${weather[0].description}</li>
      <li>
        <i className='pe-2x pe-7w-thermometer-1-2'></i>
        {main.temp.toFixed()}
        &deg;C
      </li>
      <li>
        <i className='pe-2x pe-7w-sunrise'></i>
        {sys.sunrise}
      </li>
      <li>
        <i className='pe-2x pe-7w-sunset'></i>
        {sys.sunset}
      </li>
    </ul>
  );
};

const successHandler = (data) => {
  const dataObj = JSON.parse(data);
  const weatherDiv = document.querySelector('#weathercontent');
  ReactDOM.createRoot(weatherDiv).render(successContent(dataObj));
};

const failHandler = (data) => {
  const dataObj = JSON.parse(data);
  const weatherDiv = document.querySelector('#weathercontent');
  ReactDOM.createRoot(weatherDiv).render(failedContent(dataObj));
};

const Weather = () => {
  const value = useContext(Context);
  const { state, dispatch } = value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.currentCity.name}&APPID=${API_KEY}&units=metric&lang=en`;
  getWeather(url, successHandler, failHandler);

  const setPage = (e) => {
    dispatch({
      type: 'setPage',
      payload: { actPage: 'city' },
    });
  };
  return (
    <>
      <button onClick={setPage} className='btn btn-back' />
      <div id='weathercontent'></div>
    </>
  );
};
export default Weather;

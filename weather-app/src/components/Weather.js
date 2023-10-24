import React, { useContext } from 'react';
import { Context } from '../utils/context';
import { API_KEY } from '../utils/constans';

const get = (url, success, fail) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', url);
  httpRequest.onload = function () {
    if (httpRequest.status === 200) {
      success(httpRequest.responseText);
    } else {
      fail(httpRequest.status);
    }
  };
  httpRequest.send();
};

const getTime = (time) => {
  const date = new Date(time);
  return { hours: date.getHours(), minutes: date.getMinutes() };
};

const successHandler = (data) => {
  const dataObj = JSON.parse(data);
  const { main, sys, weather, dt } = dataObj;
  const weatherDiv = document.querySelector('#weathercontent');
  const weatherFragment = `<ul class="weather-list">
  <li class="time">${getTime(dt).hours}</li>
  <li class="time">${getTime(dt).minutes}</li>
  <li class="city">${dataObj.name}</li>
  <li><img src="https://openweathermap.org/img/wn/${
    weather[0].icon
  }@2x.png" alt="${weather[0].description}"/></li>
  <li>${weather[0].description}</li>
  <li><i class="pe-2x pe-7w-thermometer-1-2"></i>${main.temp.toFixed()}&deg;C</li>
  <li><i class="pe-2x pe-7w-sunrise"></i>${sys.sunrise}</li>
  <li><i class="pe-2x pe-7w-sunset"></i>${sys.sunset}</li></ul>`;
  weatherDiv.innerHTML = weatherFragment;
};

const failHandler = (status) => {
  const weatherDiv = document.querySelector('#weathercontent');
  weatherDiv.innerHTML = status;
};

const Weather = () => {
  const value = useContext(Context);
  const { state, dispatch } = value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${state.currentCity.name}&APPID=${API_KEY}&units=metric&lang=en`;
  get(url, successHandler, failHandler);

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

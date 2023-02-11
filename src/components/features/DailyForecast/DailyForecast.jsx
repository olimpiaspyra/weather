import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {ColorRing} from 'react-loader-spinner';

import FormatDate from '../FormatDate/FormatDate';

import humidityicon from '../../../assets/images/humidity.png';
import windicon from '../../../assets/images/wind.png';
import descriptionicon from '../../../assets/images/description.png';

import './DailyForecast.scss';
import WeatherSearch from '../WeatherSearch/WeatherSearch';

const DailyForecast = ({defaultCity}) => {
  const [weather, setWeather] = useState({ready: false});
  const [city, setCity] = useState(defaultCity);

  const handleResponse = res => {
    setWeather({
      ready: true,
      city: res.data.name,
      temp: res.data.main.temp,
      description: res.data.weather[0].description,
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
      max: res.data.main.temp_max,
      min: res.data.main.temp_min,
      timezone: res.data.timezone,
      date: new Date(res.data.dt * 1000),
    });
    console.log(res);
  };

  const search = () => {
    const apiKey = 'a99376dd5e5450ec95352ece5cc2404d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  };

  const handleSubmit = e => {
    e.preventDefault();
    search();
    e.target.reset();
  };

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  if (weather.ready) {
    return (
      <>
        <div>
          <WeatherSearch
            handleSubmit={handleSubmit}
            handleCityChange={handleCityChange}
          />
        </div>
        <div className='weather__daily'>
          <h1 className='weather__daily__city p-3 text-uppercase'>{weather.city}</h1>
          <div className='weather__daily__content row justify-content-md-center'>
            <div className='weather__daily__content__left col-6 my-4 row align-items-center mx-0'>
              <h2 className='weather__daily__content__left__date px-3'>
                <FormatDate date={weather.date} />
              </h2>
              <h3 className='weather__daily__content__left__temperature px-3'>
                {Math.round(weather.temp)}°C
              </h3>
            </div>
            <div className='weather__daily__content__right col-6 d-flex justify-content-center my-4'>
              <img src={require(`../../../assets/images/10d.png`).default} alt='image' className='mainIcon' />
            </div>
            <div className='weather__daily__content__main row mt-4 mx-0'>
              <ul className='weather__daily__content__main__list col-6'>
                <li className='weather__daily__content__main__list__item__conditions row p-3'>
                  <div className='weather__daily__content__main__list__item__icons col-3'>
                    <img src={descriptionicon} alt='weather icon' className='icons' />
                  </div>
                  <div className='weather__daily__content__main__list__item__text col-9'>
                    {weather.description}
                  </div>
                </li>
                <li className='weather__daily__content__main__list__item__humidity row p-3'>
                  <div className='weather__daily__content__main__list__item__icons col-3'>
                    <img src={humidityicon} alt='humidity icon' className='icons' />
                  </div>
                  <div className='weather__daily__content__main__list__item__text col-9'>
                    {weather.humidity}%
                  </div>
                </li>
                <li className='weather__daily__content__main__list__item__wind row p-3'>
                  <div className='weather__daily__content__main__list__item__icons col-3'>
                    <img src={windicon} alt='wind icon' className='icons' />
                  </div>
                  <div className='weather__daily__content__main__list__item__text col-9'>
                    {Math.round(weather.wind)} km/h
                  </div>
                </li>
              </ul>
              <ul className='weather__daily__content__main__list col-4 p-3'>
                <li className='weather__daily__content__main__list__item row p-3'>
                  <p className='weather__daily__content__main__list__item__temp col-4'>
                    Max
                  </p>
                  <div className='weather__daily__content__main__list__item_temp col-8'>
                    {Math.round(weather.max)}°
                  </div>
                </li>
                <li className='weather__daily__content__main__list__item row p-3'>
                  <p className='weather__daily__content__main__list__item__temp col-4'>
                    Min
                  </p>
                  <div className='weather__daily__content__main__list__item__temp col-8'>
                    {Math.round(weather.min)}°
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    search();
    return (
      <div className='spinner'>
        <p>Loading...</p>
        <ColorRing
          visible={true}
          height='80'
          width='80'
          ariaLabel='blocks-loading'
          wrapperStyle={{}}
          wrapperClass='blocks-wrapper'
          colors={['#e35c91', '#59a1eb', '#e35c91', '#59a1eb', '#e35c91', '#59a1eb']}
          text-align='center'
        />
      </div>
    );
  }
};

DailyForecast.propTypes = {
  defaultCity: PropTypes.string,
};

export default DailyForecast;

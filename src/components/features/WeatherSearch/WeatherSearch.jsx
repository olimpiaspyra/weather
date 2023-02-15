import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {ColorRing} from 'react-loader-spinner';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';

import DailyForecast from '../DailyForecast/DailyForecast';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';

import './WeatherSearch.scss';

const WeatherSearch = ({defaultCity}) => {
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
      coordinates: res.data.coord,
      icon: res.data.weather[0].icon,
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
        <div className='weather__search row justify-content-center align-items-center'>
          <div className='weather__search__bar col-8'>
            <form action='' className='weather__search__form' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Enter a city...'
                className='weather__search__input'
                onChange={handleCityChange}
              />
              <button type='submit' className='weather__search__button buttons'>
                <FontAwesomeIcon
                  icon={faSearchengin}
                  className='weather__search__icon'
                />
              </button>
            </form>
          </div>
        </div>
        <DailyForecast weather={weather} />
        <WeeklyForecast coordinates={weather.coordinates} />
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

WeatherSearch.propTypes = {
  defaultCity: PropTypes.string,
};

export default WeatherSearch;

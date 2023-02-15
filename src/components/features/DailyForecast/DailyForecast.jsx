import React from 'react';
import PropTypes from 'prop-types';

import FormatDate from '../FormatDate/FormatDate';

import './DailyForecast.scss';

const DailyForecast = ({weather}) => {
  const {city, date, temp, description, humidity, wind, max, min, icon} = weather;

  return (
    <div className='weather__daily'>
      <h1 className='weather__daily__city p-3 text-uppercase'>{city}</h1>
      <div className='weather__daily__content row justify-content-md-center'>
        <div className='weather__daily__content__left col-6 my-4 row align-items-center mx-0'>
          <h2 className='weather__daily__content__left__date px-3'>
            <FormatDate date={date} />
          </h2>
          <h3 className='weather__daily__content__left__temperature px-3'>
            {Math.round(temp)}°C
          </h3>
        </div>
        <div className='weather__daily__content__right col-6 d-flex justify-content-center my-4'>
          <img
            src={require(`../../../assets/images/${icon}.png`).default}
            alt='image'
            className='mainIcon'
          />
        </div>
        <div className='weather__daily__content__main row mt-4 mx-0 text-align-center'>
          <ul className='weather__daily__content__main__list col-6'>
            <li className='weather__daily__content__main__list__item__conditions row p-3'>
              <div className='weather__daily__content__main__list__item__text col-9'>
                <strong className='text-capitalize'>{description}</strong>
              </div>
            </li>
            <li className='weather__daily__content__main__list__item__humidity row p-3'>
              <div className='weather__daily__content__main__list__item__text col-9'>
                <strong>Humidity:&nbsp;</strong>
                {humidity}%
              </div>
            </li>
            <li className='weather__daily__content__main__list__item__wind row p-3'>
              <div className='weather__daily__content__main__list__item__text col-9'>
                <strong>Wind:&nbsp;</strong> {Math.round(wind)} km/h
              </div>
            </li>
          </ul>
          <ul className='weather__daily__content__main__list col-4 p-3'>
            <li className='weather__daily__content__main__list__item row p-3'>
              <p className='weather__daily__content__main__list__item__temp col-4'>
                <strong>Max</strong>
              </p>
              <div className='weather__daily__content__main__list__item_temp col-8'>
                {Math.round(max)}°
              </div>
            </li>
            <li className='weather__daily__content__main__list__item row p-3'>
              <p className='weather__daily__content__main__list__item__temp col-4'>
                <strong>Min</strong>
              </p>
              <div className='weather__daily__content__main__list__item__temp col-8'>
                {Math.round(min)}°
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

DailyForecast.propTypes = {
  weather: PropTypes.object,
};

export default DailyForecast;

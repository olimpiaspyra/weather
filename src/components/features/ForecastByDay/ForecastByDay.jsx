import React from 'react';
import PropTypes from 'prop-types';

import './ForecastByDay.scss';

const ForecastByDay = ({data}) => {
  const maxTemp = () => {
    let temp = Math.round(data.temp.max);
    return `${temp}`;
  };

  const minTemp = () => {
    let temp = Math.round(data.temp.min);
    return `${temp}`;
  };

  const day = () => {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();
    let days = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];
    return days[day];
  };

  return (
    <div className='weather__weekly'>
      <ul className='weather__weekly__list col d-flex'>
        <li className='weather__weekly__list__item col '>
          <div className='weather__weekly__list__item__date py-2'>{day()}</div>
          <div className='weather__weekly__list__item__icon py-2'>
            <img
              src={
                require(`../../../assets/images/${data.weather[0].icon}.png`).default
              }
              alt='icon'
              className='day__icons'
            />
          </div>
          <div className='weather__weekly__list__item__temp py-2'>{maxTemp()}°</div>
          <div className='weather__weekly__list__item__temp py-2'>{minTemp()}°</div>
        </li>
        <li className='weather__weekly__list__item col '>
          <div className='weather__weekly__list__item__date py-2'>{day()}</div>
          <div className='weather__weekly__list__item__icon py-2'>
            <img
              src={
                require(`../../../assets/images/${data.weather[0].icon}.png`).default
              }
              alt='icon'
              className='day__icons'
            />
          </div>
          <div className='weather__weekly__list__item__temp py-2'>{maxTemp()}°</div>
          <div className='weather__weekly__list__item__temp py-2'>{minTemp()}°</div>
        </li>
      </ul>
    </div>
  );
};

ForecastByDay.propTypes = {
  data: PropTypes.object,
};

export default ForecastByDay;

import React from 'react';

import './WeeklyForecast.scss';

const WeeklyForecast = () => {
  return (
    <div className='weather__weekly'>
      <div className='weather__weekly row justify-content-md-center'>
        <ul className='weather__weekly__list col d-flex'>
          <li className='weather__weekly__list__item col'>
            <div className='weather__weekly__list__item__date'>Day</div>
            <div className='weather__weekly__list__item__icon'>
              <img src='' alt='icon' className='icons' />
            </div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
          </li>
          <li className='weather__weekly__list__item col'>
            <div className='weather__weekly__list__item__date'>Day</div>
            <div className='weather__weekly__list__item__icon'>
              <img src='' alt='icon' className='icons' />
            </div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
          </li>
          <li className='weather__weekly__list__item col'>
            <div className='weather__weekly__list__item__date'>Day</div>
            <div className='weather__weekly__list__item__icon'>
              <img src='' alt='icon' className='icons' />
            </div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
          </li>
          <li className='weather__weekly__list__item col'>
            <div className='weather__weekly__list__item__date'>Day</div>
            <div className='weather__weekly__list__item__icon'>
              <img src='' alt='icon' className='icons' />
            </div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
          </li>
          <li className='weather__weekly__list__item col'>
            <div className='weather__weekly__list__item__date'>Day</div>
            <div className='weather__weekly__list__item__icon'>
              <img src='' alt='icon' className='icons' />
            </div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
          </li>
          <li className='weather__weekly__list__item col'>
            <div className='weather__weekly__list__item__date'>Day</div>
            <div className='weather__weekly__list__item__icon'>
              <img src='' alt='icon' className='icons' />
            </div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
          </li>
          <li className='weather__weekly__list__item col'>
            <div className='weather__weekly__list__item__date'>Day</div>
            <div className='weather__weekly__list__item__icon'>
              <img src='' alt='icon' className='icons' />
            </div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
            <div className='weather__weekly__list__item__temp'>Temp</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeeklyForecast;
